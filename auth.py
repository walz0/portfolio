import base64
from getpass import getpass

with open(".env", "w+") as file:
    username = input("username: ")
    password = getpass("password: ")
    file.write("GITHUB_AUTH=" + str(base64.b64encode(bytes((username + ":" + password), "utf-8")))[2:-1])
