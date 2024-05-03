# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Getting Started

You can clone this repo to run the project locally, or navigate to the workspace in the Udacity course.

## Project Instructions
* Elastic Beanstalk dashboard
![image](https://github.com/hait1989-neal/cd12099-Full-Stack-Apps-AWS/assets/54790643/7caa769e-e237-472b-ac00-0f1c40cf4f09)
![image](https://github.com/hait1989-neal/cd12099-Full-Stack-Apps-AWS/assets/54790643/6ebe180d-95c1-4284-a8be-f836c192b567)

* Successful URL responses should have a 200 code. 
![image](https://github.com/hait1989-neal/cd12099-Full-Stack-Apps-AWS/assets/54790643/54b638ce-2eb7-4244-9ebb-5b5500e2544e)


* Ensure that you include error codes for the scenario that someone uploads something other than an image and for other common errors.
  ** Query parameter image_url is not valid url 
  ![image](https://github.com/hait1989-neal/cd12099-Full-Stack-Apps-AWS/assets/54790643/f3c6400d-cae1-455d-b2ca-8261ca4f7ca1)

  ** Query parameter image_url is not a image
  ![image](https://github.com/hait1989-neal/cd12099-Full-Stack-Apps-AWS/assets/54790643/7121be48-e19f-4325-836e-2bdacb196b89)



## License

[License](LICENSE.txt)
