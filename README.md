# Meals app (food recipes)

Ky projekt eshte nje aplikacion per receta gatimi i zhvilluar në kuader të kursit per pervetesimin e react native. 
Aplikacioni mundeson regjistrimin dhe logimin e perdoruesve, shfaqjen e recetave me popular, detaje te plota per perberesit dhe menyren e pergatitjes, ruajtjen e recetave te preferuara, shperndarjen e tyre si dhe vendosjen e rikujtesave ditore. 
Qellimi i aplikacionit eshte te ofroje nje eksperience te personalizuar dhe intuitive per perdoruesin.

## Funksionalitetet

1-Regjistrimi i perdoruesve

2-Logimi i perduesve dhe ofrimi i nje faqeje te personalizuar.

3-Paraqitja e recetave ne formen e kartave informuese te klikusheme me imazhin,titullin,nje pershkrim te shkruter dhe kohen e pergatijes dhe ne rast klikimi informacione me te detajuara ne lidhje me perberesit dhe instrukstionet.

4-Hapesire e ruajtjes se recetave ne faqen Favourites nga useri.

## Struktura e projektit
/MyApp

 /meals

   /homepage

        about.js

         card.js
    
         detail.js

         home.js
    
         instructions.js

   /images

   /Login_Signin

          login.js

          SignIn.js

    /settings
          fav.js
          settings.js

 data.json
 UserContext.js

App.js
index.js


## App.js (Navigimi dhe struktura) dhe UserContext.js (konteksti)

Kam perdor **React Navigation** (Native Stack Navigator) per menaxhimin e navigimit midis screens.
Te gjitha screens (SignIn, Login, Home, Detail, Settings dhe Favorites) i kam organizuar brenda nje Stack Navigator-i, ndersa NavigationContainer sherben si kontejneri kryesor i navigimit. ku si pike starti default merret SignIn.

Kam perdorur UserProvider **(Context API)** per menaxhimin global te `usename` te perdoruesit. Ne `UserContext.js` kam krijuar kontekstin `UserContext` per ta bere usename te aksesueshme nga te gjitha faqet pa patur nevoj ta jap si prop dhe `UserProvider` qe rrethon te gjithe komponentet e aplikacionit qe do te kene akses tek username.Variablin username e kam menxhuar me ane te **useState** duke i percaktuar intial value si `null` dhe funskionin `setUsename` per ndryshimin e vleres se tij nga komponentet.

## SignIn.js






  
