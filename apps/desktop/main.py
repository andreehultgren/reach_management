import os
from dotenv import load_dotenv
import requests
from pprint import pprint
from dataclasses import dataclass


@dataclass
class Project:
    id: str
    active: bool
    name: str
    

load_dotenv() 
PROJECTS_DATABASE = "22e6332d279680e0b87bc5a6c3a2a5c0"

BASE_URL = "https://api.notion.com"

headers = {
  "Authorization": f"Bearer {os.getenv('NOTION_SECRET')}",
  "Notion-Version": "2022-06-28"
}

def get_users():
    response = requests.get(f"{BASE_URL}/v1/users", headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Error fetching users: {response.status_code} - {response.text}")


def get_projects():
    data = {
        "filter": {
            "property": "Active",
            "checkbox": {
                "equals": True
            }
        }
    }
    response = requests.post(
        f"{BASE_URL}/v1/databases/{PROJECTS_DATABASE}/query",
        headers=headers,
        json=data
    )
    if response.status_code == 200:
        results = response.json()["results"]
        projects = []
        for result in results:
            project = Project(
                id=result["id"],
                active=result["properties"]["Active"]["checkbox"],
                name=result["properties"]["Name"]["title"][0]["text"]["content"]
            )
            projects.append(project)
        return projects
    else:
        raise Exception(f"Error fetching projects: {response.status_code} - {response.text}")

def get_database():
    response = requests.get(f"{BASE_URL}/v1/databases/{PROJECTS_DATABASE}", headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Error fetching database: {response.status_code} - {response.text}")

pprint(get_projects())
