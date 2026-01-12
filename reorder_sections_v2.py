
import re

file_path = '/home/nibax/Projects/portofolio/index.html'

with open(file_path, 'r') as f:
    content = f.read()

# 1. SPLIT SECTIONS
# We rely on the specific comments I saw in the file.
# Note: Regex usage to capture the full block including the comment.

# Define dividers
dividers = [
    '<!-- About Section -->',
    '<!-- Education Section -->',
    '<!-- Work Experience Section -->',
    '<!-- Projects Section -->',
    '<!-- Contact Section -->',
    '<!-- Footer -->'
]

# We need to find the start index of each divider
indices = {}
for div in dividers:
    idx = content.find(div)
    if idx == -1:
        print(f"Error: Could not find divider '{div}'")
        exit(1)
    indices[div] = idx

# Extract parts
# Header includes Navbar and Hero (Hero is before About)
header_part = content[:indices['<!-- About Section -->']]
about_part = content[indices['<!-- About Section -->']:indices['<!-- Education Section -->']]
education_part = content[indices['<!-- Education Section -->']:indices['<!-- Work Experience Section -->']]
experience_part = content[indices['<!-- Work Experience Section -->']:indices['<!-- Projects Section -->']]
projects_part = content[indices['<!-- Projects Section -->']:indices['<!-- Contact Section -->']]
contact_part = content[indices['<!-- Contact Section -->']:indices['<!-- Footer -->']]
footer_part = content[indices['<!-- Footer -->']:]

# 2. REORDER MAIN SECTIONS
# Desired: Header -> Projects -> Experience -> About -> Education -> Contact -> Footer
new_body_content = header_part + projects_part + experience_part + about_part + education_part + contact_part + footer_part

# 3. REORDER NAV BAR (Desktop)
# Located in header_part.
# We look for the div containing the desktop links: <div class="hidden md:flex space-x-8">
# Links have class "desktop-nav-link"
# We need to reorder them: Home, Projects, Experience, About.

def reorder_desktop_nav(text):
    nav_container_pattern = r'(<div class="hidden md:flex space-x-8">)(.*?)(</div>)'
    match = re.search(nav_container_pattern, text, re.DOTALL)
    if not match:
        print("Warning: Could not find desktop nav container")
        return text
    
    start_tag = match.group(1)
    links_html = match.group(2)
    end_tag = match.group(3)
    
    # Extract individual links
    # Assuming standard structure <a ...> ... </a>
    link_pattern = r'(<a href=".*?".*?>.*?</a>)'
    links = re.findall(link_pattern, links_html, re.DOTALL)
    
    # Map links by data-target
    link_map = {}
    for link in links:
        if 'data-target="home"' in link:
            link_map['home'] = link
        elif 'data-target="about"' in link:
            link_map['about'] = link
        elif 'data-target="experience"' in link:
            link_map['experience'] = link
        elif 'data-target="projects"' in link:
            link_map['projects'] = link
        # ignore others if any
            
    # New order: Home, Projects, Experience, About
    new_links_html = "\n".join([
        link_map.get('home', ''),
        link_map.get('projects', ''),
        link_map.get('experience', ''),
        link_map.get('about', '')
    ])
    
    return text.replace(match.group(0), start_tag + new_links_html + end_tag)

new_body_content = reorder_desktop_nav(new_body_content)

# 4. REORDER MOBILE NAV
# Located in footer_part (lines 1173+)
# Class: "fixed bottom-4 ..."
# Links have class "nav-link"

def reorder_mobile_nav(text):
    # Pattern to find the mobile nav container (basic match)
    nav_pattern = r'(<nav\s+class="fixed bottom-4.*?md:hidden.*?">)(.*?)(</nav>)'
    match = re.search(nav_pattern, text, re.DOTALL)
    if not match:
        print("Warning: Could not find mobile nav container")
        return text

    start_tag = match.group(1)
    links_html = match.group(2)
    end_tag = match.group(3)

    # Extract links
    # Be careful with nested divs. The links are the direct children <a> tags.
    # Regex might be fragile if <a> contains <div>. 
    # But here we know the structure: <a href... class="nav-link..."> ... </a>
    # We can split by <a href="# and look ahead.
    
    # Better: finding all <a ... </a> blocks might be hard with nested content (svgs).
    # However, each link ends with </a> and starts with <a.
    # Let's count balanced tags or just use the fact they are sequential.
    
    # Since we know the structure is simple:
    # <a ... data-target="X"> ... </a>
    
    link_pattern = r'(<a href=".*?" class="nav-link.*?".*?data-target=".*?".*?>.*?</a>)'
    links = re.findall(link_pattern, links_html, re.DOTALL)
    
    link_map = {}
    for link in links:
        if 'data-target="home"' in link:
            link_map['home'] = link
        elif 'data-target="about"' in link:
            link_map['about'] = link
        elif 'data-target="experience"' in link:
            link_map['experience'] = link
        elif 'data-target="projects"' in link:
            link_map['projects'] = link
        elif 'data-target="contact"' in link:
            link_map['contact'] = link

    # New Order: Home, Projects, Experience, About, Contact
    new_links_html = "\n".join([
        link_map.get('home', ''),
        link_map.get('projects', ''),
        link_map.get('experience', ''),
        link_map.get('about', ''),
        link_map.get('contact', '')
    ])
    
    return text.replace(match.group(0), start_tag + new_links_html + end_tag)

new_body_content = reorder_mobile_nav(new_body_content)

# Write back
with open(file_path, 'w') as f:
    f.write(new_body_content)

print("Successfully reordered index.html sections and navigation.")
