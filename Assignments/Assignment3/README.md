##Steps to use the above code
1. Download the above code files and open that folder in VS Code.
2. Open the terminal and navigate to the folder where all the above code files are saved.
3. Run the following command so that all the necessary dependencies are installed into the folder:
  > npm install
4. After all the dependencies are installed, open a new terminal and run the following command so that MongoDB will be started in the backend:
  > mongod
5. Return back to the first terminal and run the following command to start the application:
  > nodemon run start
6. Open your Postman workspace, select the HTTP request as GET and paste this url: http://localhost:9000/books and click "Send"(This will retrieve all the data stored in the database.)
![image](https://github.com/supraja2002-hema/20JG1A4205-Supraja/assets/82303022/1a872c8b-32c4-4b14-82a3-5daca282eb5d)
7. To post new data to the database, change the HTTP request to POST and add data in the JSON format
![image](https://github.com/supraja2002-hema/20JG1A4205-Supraja/assets/82303022/b940ffa5-82bc-4dc3-be8a-43a8137bd739)
8. Then click "Send". The data is inserted into the database and you will get the following response:
![image](https://github.com/supraja2002-hema/20JG1A4205-Supraja/assets/82303022/6679ea17-73d1-4e37-b6cd-79e49b83d244)
9. To check if the data is really inserted or not, change into GET and click "Send" again.
![image](https://github.com/supraja2002-hema/20JG1A4205-Supraja/assets/82303022/6003b94b-61e4-4158-9dc4-cf5b6ae166c3)
10. To modify existing data in the database, change into PATCH and modify the url and click "Send".
![image](https://github.com/supraja2002-hema/20JG1A4205-Supraja/assets/82303022/3ace8138-4eb6-4dbf-928d-66e38ce3218f)
11. After the data is modified, you will get the following output:
![image](https://github.com/supraja2002-hema/20JG1A4205-Supraja/assets/82303022/b9295ab2-1e62-4d45-92d5-5c3159a57fef)
12. To delete a particular data, change into DELETE, modify the url and click "Send".
![image](https://github.com/supraja2002-hema/20JG1A4205-Supraja/assets/82303022/036624f1-8265-42ba-aae2-a7a5109bd0d0)
