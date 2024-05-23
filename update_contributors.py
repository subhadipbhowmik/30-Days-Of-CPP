import requests

username = 'subhadipbhowmik'
repo = '30-Days-Of-CPP'
url = f'https://api.github.com/repos/{username}/{repo}/contributors'

response = requests.get(url)
contributors = response.json()

contributors_list = []

for contributor in contributors:
    avatar_url = contributor['avatar_url']
    login = contributor['login']
    profile_url = contributor['html_url']
    
    contributors_list.append(f"| ![avatar]({avatar_url}&s=50) | [{login}]({profile_url}) |")

with open('README.md', 'r') as file:
    readme_content = file.readlines()

# Find the index to insert contributors
start_index = readme_content.index('| Avatar | Name | GitHub Profile |\n') + 2

# Remove existing contributors data
while readme_content[start_index].startswith('| ![avatar]'):
    readme_content.pop(start_index)

# Insert new contributors data
for contributor in contributors_list:
    readme_content.insert(start_index, f"{contributor}\n")
    start_index += 1

# Write the updated content back to README.md
with open('README.md', 'w') as file:
    file.writelines(readme_content)
