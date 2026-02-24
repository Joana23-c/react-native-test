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

Me kete komponent menaxhoj regjistrimin e perdouesve te aplikacionit. Kam perdorur `useState` per te ruajtuar te dhenat e inpiteve username,email dhe password qe jepen nga perdoruesi, per te marre gjendjen me te updatuar nga **TextInput** me ane te `onChange`. Pas kontrollit te inputeve me ate te `regex-eve` ruaj userin ne **AsyncStorage**, ku key=users dhe value eshte vektor objektesh qe cdo objekt ne formatin {email: 'user@gmail.com', username: 'use1', password: '123', favourites: []}. Pas regjistrimit te suksesesshem, perdoruesi ridrejtohet automatikisht te ekrani i Login. Kam krujuar funksione si `showAllStorage` dhe  `clearAllStorage` per debug, psh para regjistimit te nje useri te ri kam perdor showAllStorage per te pare gjenjen e AsyncStorage, ketu kam perdorur **useEffect( () =>{},[])** per ta ekzekutuar vetem nje here .

Me ane te **TouchableOpacity** kam krijuar nje link qe useri te mund te ridrejtohet ne log-in nese ka nje account.

<img width="956" height="902" alt="image" src="https://github.com/user-attachments/assets/55351cc4-f9a1-438a-b72d-3336d9e19ac4" />


**Login.js**
Me kete komponent bej te mundur logimin e perdoruesve ne aplikacion duke perdorur emaili dhe passord. Pasi useri jep te kredencialet i kontrolloj nese ato jane aktualisht ne `AsyncStorage'. Pasi useri logohet ne menyre te suksesshme, vendos username ne UserContext dhe useri ridretohet ne homepage `home`.

<img width="950" height="907" alt="image" src="https://github.com/user-attachments/assets/44b966c5-4224-4020-b51d-44cdb0e20928" />


**data.json**

Te gjitha te dhenat qe nje recete duhet te kete i kam vendosur ne json file `data.json` qe permban percdo pakete `id` qe cdo pakete e ka unike, `image` per te percaktuar emrin e imaxhin,  `title` per titullin e pakets, `desc` qe eshte nje pershkrim i shkurter i recetes, `time` qe eshte koha e pergatitjes se recetes, `about` dhe `instuctions` jane peshkrime te detajuara te recetes qe do te vendose ne `details` pages , `category` qe jep kategorine e ushqimit dhe se fundi kam percaktuar `top` qe percakton nese paketa do te jete tek seksioni Popular (me vlere 1 ) apo other (me vlere 0).

**card.js, about.js, instructions.js**

Komponenti Card ka si funksione te marre te dhenat si prop dhe ti organizoje ne nje karte.Njesoj edhe About dhe Intructions te cilat marrin te dhenat si prop dhe i organizojne ato ne nje div.

**home.js**
Ne kete komponent, eshte homepage, ku shfaqen te gjitha kartat e recetave te cilat i kam organizuar ne dy kategori : Popular Recipes dhe Other Recipes.
Seksionin e kartave te Popular Recipes e kam organizuar si nje **ScrollView** horizontal, ndersa ne Other Recipes kartat i kam paraqitur me ane te **FlatList** dhe i kam percaktuar `numColumns={2}` per ti vendosur kartat dy e nga dy. 
Ne FlatList dhe ScrollView kam marre te dhenat nga `data` (json file te cilin e kam importuar) dhe per cdo elemet objekt te data kam krijuar nje `Card` component duke i dhene pops e nevojitur dhe e kam rrethuar kete komponent me `TouchableOpacity` per ta bere te klikueshem.

<img width="302" height="331" alt="image" src="https://github.com/user-attachments/assets/60d70012-4711-4e4b-a9fb-6c2629f5686e" />

Klikimi ne TouchableOpacity e menaxoj me ane te funksionit `handlePress(id)` qe me navigon tek screen `Detail` duke dhene si props edhe id e kartes qe u klikua.

Po ashtu ne homepage jane edhe imazhet e logos dhe settins qe jane te klikueshme dhe repsektivisht ridrejtojne userin ne homepage dhe setting page.

<img width="912" height="910" alt="image" src="https://github.com/user-attachments/assets/96e59209-568c-4847-b60d-b11e94edc5cb" />

**Detail.js**
Detail eshte komponenti qe pas klikimit t ne te nje karte ne homepage, useri ridjetohe ne kete faqe dhe jep te gjitha detajet e recetes se klikuar.

Ne fillim ka imazhet e logos dhe settings qe jane te klikueshme dhe repsektivisht ridrejtojne userin ne homepage dhe setting page.

Me ane te id se recetes, te dhene si props, bej te mundur identifikimin e kartes se klikuar dhe me ane te `data.find(i => i.id === id)` duke ruajtuar te gjitha te dhenat e objektit te recetes ne item dhe me pas i shfaq ne kran.

Pas shqfaqes se titullit, imazhit dhe elementeve te tjera kam krijuar butonat  `About` dhe `Instructions` qe me klikim e njerit ose tjetrit therras komponentin about ose detail.Per te menaxhuar shfaqen e ketyre komponenteve kam perdorur `useState` activeComponent, ne klikimin e butonit about setActiveComponent(1) dhe me klikimin e instuctions setActiveComponent(2).Ne varesi te vleres se activeComponent therras edhe komponentin.Intital value te activeComponent e kam vendosur 1 prandja ehde fillim=sht do teshfaqet seksioni about i recetes se gatimit.

Funksion tjeter i rendesishem ne kete komponent eshte dhe ruajta e recetave te preferuara. Ne momentin qe klikohet butoni `Add To favourites` ekzekutohet funskioni `addtoFav` qe akseson elementin `favourites` te userit ne `AsyncStorage`, duke e gjetur objektin e userit nga username qe kam ruajtur ne `kontekts` (const { username } = useContext(UserContext);, const user = users.find(u =>u.username ===username );) dhe ruaj vektorin ne variablin `favourites` (favourites = user.favourites || [];). Pasi kam ruajtur vektorin shtoj ne te id e recetes (favourites.push(id);) dhe e ruaj vektorin e updatuar tek objekti i userit dhe me pas e ruaj key-in me vlern e bere update ne AsyncStrage.

<img width="961" height="911" alt="image" src="https://github.com/user-attachments/assets/0a670ffa-3bce-4519-81ac-eca3fb8f3054" />

**settings.js**
Settings eshte komponenti tek i cili ridrejtohem nga klikimi i imaxhit te setting. Ky komponent permban dy butona : 

1-Favourites qe onPress navigon tek screen `Fav`.

2-LogOut qe ne onPress navigon ne LogIn duke e nxjerre userin nga applikacioni.

<img width="957" height="676" alt="image" src="https://github.com/user-attachments/assets/636c0240-3a31-406d-a60d-0bbab88ab4fc" />


**fav.js**

Fav eshte komponenti qe liston te gjitha paketat qe useri ka ruajtuar me ane te butonit Add to Favourites. Per ta bere kete listim fillimish me komponenti merr te dhenat e userit nga `AsyncStorage`. Vektorin e id-ve te recetave te preferuara (`favourites`) e ruaj ruhet ne state (`favs`). Per cdo id te marre nga Favourites therras koponentin `Card` per ti shfaqur te dhenat ne nje `ScrollView` veritkal.

<img width="957" height="910" alt="image" src="https://github.com/user-attachments/assets/d9b10c2a-420b-42a5-9ce4-3bd9096b2f79" />









  
