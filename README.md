# YOU-GI-HO-PWA-Application
# android &amp;PWA Cross platform
![image](https://user-images.githubusercontent.com/79064198/115035549-97a6c600-9ec4-11eb-9f28-588184dd467e.png)
## Name: NIHAO DONG
### Android
#### 1.Introduction
![image](https://user-images.githubusercontent.com/79064198/115035725-c4f37400-9ec4-11eb-9786-a06e8558129a.png)
![image](https://user-images.githubusercontent.com/79064198/115035731-c7ee6480-9ec4-11eb-900f-5655c33be1f5.png)
![image](https://user-images.githubusercontent.com/79064198/115035745-ca50be80-9ec4-11eb-9690-0931b43fc993.png)
   
When you open an android application, there is a registration screen. If you have already registered, you can click "already have an account" to log in.

To register, enter your name, email address, password, and photo (if you want). Local storage is accessed when uploading photos. The data is validated and stored in Firebase. If successful will jump out of a toast. And your e-mail will receive a verification email, it’s send by Firebase.

![image](https://user-images.githubusercontent.com/79064198/115035888-ece2d780-9ec4-11eb-8705-ecd6b832efda.png)

On the login interface, you can log in to an existing account or return to the previous page. Provide an account here: 
Account: 954583320@qq.com 
Password: 123456
Also need to pass Firebase certification. And then it will enter the application.









![image](https://user-images.githubusercontent.com/79064198/115035921-f3714f00-9ec4-11eb-88eb-ff5a856b2900.png)
![image](https://user-images.githubusercontent.com/79064198/115035936-f5d3a900-9ec4-11eb-9753-f3b088b7e23d.png)

   
The application uses the style of the bottom navigation bar. A Homepage links to three Fragments. They are: home, dashboard, setting. In the home section, you can browse briefly news about “Yu-Gi-Oh” card games. The method used to grab the local JSON file is used here.

At the same time all pages will respond appropriately when the user changes orientation. You can still read everything.
![image](https://user-images.githubusercontent.com/79064198/115035972-fc622080-9ec4-11eb-80cc-90b985a2129a.png)
![image](https://user-images.githubusercontent.com/79064198/115035983-fe2be400-9ec4-11eb-8aa4-8cabf3bb97a9.png)

  
Five functions are integrated in the dashboard page; they are:
 1. Weather query
 2. Watch animation
 3. Read comics 
 4. Store query
 5. Card database

![image](https://user-images.githubusercontent.com/79064198/115036011-04ba5b80-9ec5-11eb-84b2-88822a6795f5.png)
![image](https://user-images.githubusercontent.com/79064198/115036020-071cb580-9ec5-11eb-8064-7dc61a5ad587.png)
   
The weather query page uses the API provided by the "Open weather" website. Get the weather JSON file by URL + key. Get the latitude and longitude through GPS or network positioning, and then get the city and area. The use of address resolution requires an Internet network connection, otherwise the resolution will fail.

 ![image](https://user-images.githubusercontent.com/79064198/115036034-0be16980-9ec5-11eb-9a79-a420bb037f31.png)
 
"Watch animation" function, it wakes up the "YouTube" APP through Url. Open the “Yu-gi-oh” official channel. For browsing comics and find store, it is to open the comic website through WebView.

![image](https://user-images.githubusercontent.com/79064198/115036068-1439a480-9ec5-11eb-951d-90e04f8bcd41.png)

Card database. It will be connected to my PWA program and displayed in the Android application through JS transcoding. Here you can check the card. For details, please refer to the PWA section.

![image](https://user-images.githubusercontent.com/79064198/115036097-1b60b280-9ec5-11eb-94e5-24492993c515.png)
In the settings page, some basic information of the app is provided, and personal information about the developer is already provided.




#### 2.	 Test Plan
1. provide suitable navigation to move between screens
![image](https://user-images.githubusercontent.com/79064198/115036195-33d0cd00-9ec5-11eb-8048-2ec3fbcfe403.png)
reasons for tests:  Test whether the navigation is reasonable and usable.
expected results:  Navigation is reasonable and usable
actual results: Navigation is reasonable and usable
 
2. present well-laid out and relevant content for the app
![image](https://user-images.githubusercontent.com/79064198/115036246-3e8b6200-9ec5-11eb-862b-636eec55b1f2.png)
reasons for tests: Make sure the layout is reasonable and you can browse what you want.
expected results:  Layout is reasonable and you can browse what you want
actual results: Layout is reasonable and you can browse what you want

3. have suitably formatted text of correct size using appropriate fonts

reasons for tests: Test whether the font meets the user's requirements.
expected results:  The font is clearly visible.
actual results: The font is clearly visible.
 
4. reading data from an external API 
![image](https://user-images.githubusercontent.com/79064198/115036312-506d0500-9ec5-11eb-9057-a065e03f5d76.png)
![image](https://user-images.githubusercontent.com/79064198/115036321-52cf5f00-9ec5-11eb-99d1-2274da57056a.png)

reasons for tests: The test retrieves the JSON file provided by the API. Look for formatting errors.
expected results:  Success get JSON data through API and key
actual results: Success
   


5. reading data from local JSON source 
![image](https://user-images.githubusercontent.com/79064198/115036364-5bc03080-9ec5-11eb-95b8-bec88d2263b8.png)
![image](https://user-images.githubusercontent.com/79064198/115036382-5ebb2100-9ec5-11eb-8c63-31e8bb1304ba.png)
reasons for tests: Test whether it is feasible to obtain a local JSON file.
expected results: Success obtain JSON file.
actual results: Success
  

6. device orientation
reasons for tests: Test whether the APP is suitable for different screens.
expected results:  Both landscape and portrait screens can be viewed.
actual results: Success.
   

7. Firebase authentication
reasons for tests: Users register to log in the APP to ensure security.
expected results:  Register success.
actual results: Firebase validates users and analyzes their browsing data.
 
## PWA
### 1.	 Introduction
![image](https://user-images.githubusercontent.com/79064198/115036459-71cdf100-9ec5-11eb-80aa-aaa26fce7625.png)
![image](https://user-images.githubusercontent.com/79064198/115036578-8e6a2900-9ec5-11eb-9608-a9142f121b2f.png)
The main page is used to show the cards. Add responsive design and breakpoints. Adapt mobile phone and computer.
The search card function stores the card information in JSON format in the Firebase cloud server and then fetches the JSON file. Add responsive design and breakpoints. Adapt mobile phone and computer.
![image](https://user-images.githubusercontent.com/79064198/115036608-94600a00-9ec5-11eb-832c-3a2229ad4baf.png)
![image](https://user-images.githubusercontent.com/79064198/115036620-96c26400-9ec5-11eb-8928-5fa0c2b853ee.png)
![image](https://user-images.githubusercontent.com/79064198/115036630-99bd5480-9ec5-11eb-852e-85f089bd69a7.png)

Game rules introduction interface, there are four pages, to the side navigation bar display.
![image](https://user-images.githubusercontent.com/79064198/115036664-a17cf900-9ec5-11eb-9838-3d111305a8c3.png)

 
At the end of the top navigation bar is a download link that links to the Google store via a URl.

