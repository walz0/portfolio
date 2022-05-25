import base64

with open(".env", "w") as file:
    username = input("username: ")
    password = input("password: ")
    file.write("GITHUB_AUTH=" + str(base64.b64encode(bytes((username + ":" + password), "utf-8")))[2:-1])
