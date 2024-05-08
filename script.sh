#!/bin/bash
mkdir projects && cd projects
mkdir my_project && cd my_project
mkdir directory1 && cd directory1
mkdir subdirectory1 && cd ../
mkdir directory2 && cd directory2 && echo 'Hello from JS' > hello.txt && cd ../
mkdir directory3 && cd directory3 && mkdir subdirectory2
echo "Success!" 
