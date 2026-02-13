# User stories

## User Story 1 : Regjistimi dhe log-in :

**-Si nje user , dua te regjistrohem si nje perdorues duke vendour nje username, email-in dhe nje password, ne menyre qe te mund te krijoj nje account.**

Acceptace Criteria :

1-Perdoruesi duhet te plotesoje fushat username, email dhe password me te dhena valide dhe te klikoje butonin SIGN UP.

2-Shfaqet nje mesazh gabimi nese: Nje nga fushat lihet bosh ose username ose email permbajne vetem numra

**-Si nje user dua te notifikohem cila nga kredencialet eshte e gabuar , ne menyre qe te mos me duhet te ndryshoj te gjitha krendencialet.**

Acceptace Criteria :

1- Ne rast se eshte dhene nje username,email apo password bosh jepet ne mesazh qe "Nuk duhet te lihen fusha bosh"

2-Ne rast se eshte dhene nje username me numra apo me simbole ne mesazh jepet qe "Username duhet te permbaje vetem shkronja".

3-Inputi i emailit duhet te permbaje vetem shkrona,numra,@ dhe . .

**-Si nje user dua te keme nje mesazh qe konfirmon regjistrimin tim te sakte ne menyre qe bej log in.**

Acceptace Criteria :

1- Ne momentin qe regjistrimi kryhet me sukses, shfaqet nje mesazh per suksesin e procesit dhe useri regjistrohet ne log in per tu loguar ne applikacion.

**-Si nje user, dua qe kredencialet e mija te ruhen nje local storage , ne menyre qe te dhenat e mia te jen avalibe edhe pas pefundimit te sessionit.**

Acceptace Criteria :

1-Të dhënat e përdoruesit si username ruhen në local storage pas log-in.

## Home Page

**-Si user , une dua te keme nje mesazh mireserdhje dhe nje fjali motivuese, ne menyre qe te ndjej se faqja eshte e personalizuar dhe interesante.**

Acceptace Criteria :

1- Ne fillim te home page pas logos dhe ikones se setting do te shfaqet nje mesazh mireseardhje : "Pershendetje (emri i user-it)!" dhe nje fjali motivuese apo kuriozitet ne lidhje me ushqimet.

-Si user, ne home page dua te kem nje seskion ku te shfaqen recetat me popular, per te qene i update-uar me trendet e fundit.

Acceptace Criteria :

1- Pas thenies do te jete nje seksion "TOP RECETA" lu do te te jepen recetat me ne trend.

**-Si user, dua qe recetat te me tregohet nje foto e ushqimit, emri dhe koha qe duhet per tu gatuar.**

Acceptace Criteria :

1-Te gjitha recetat do te shfaqen ne home page si karta te klikueshme qe permbajne nje foto te qarte te ushqimit, poshte fotos do te jete i vendosur emri dhe koha qe duhet qe ky ushqim te pergatitet.

**-Si user dua te kem nje homepage intuitiv ne menyre qe te shkoj lehtesisht nga nje faqe e app-it ne tjetrin.**

Acceptace Criteria :

1-Klikimi i logos se app-it ridrejton user-in gjithmone ne home page dhe nese klikoj butonin e setting ridejtohem ne faqen e settings.

## User Stories for the detailed screen.

Pas klikimit te nje nga kartat e recetave perdoruesi ridrejtohet ne faqen ku jepen te dhenat e detajuara te kesaj recete. Poashte logos se app-it dhe butonit share ndodhet titulli i recetes dhe nje foto e madhe e ushqimit .

**-Si user, dua qe te keme nje pershrim te ushqimit ne lidhje me perberesit dhe benefitet e atij ushqimi, ne menyre qe te marr informacion te plote per te vendosur nqs dua apo jo ta pergatis ate.**

Acceptace Criteria :

1-Seksioni ABOUT permban nje pershkrim shume te detajuar te perbereseve dhe benefiteve te ketij ushqimi.

**-Si user , dua qe pervec nje pershkrimit te kem edhe menyren e qarte te pergatitjes se ushqimit per ta realizuar nemenyre sa me te suksesshme.**

Acceptace Criteria :

1-Seksiooni INSTRUKSIONE eshte seksioni qe permban te gjitha detajet per gramaturat e perberesve dhe instruksionet e pergatitjes.

**-Si user, dua te ruaj nje recete ne menyre qe ta aksesoj edhe me vone lehtesisht.**

Acceptace Criteria :

1-Klikimi i butoni ADD TO FAVORITES shton recenten tek te preferuar dhe klikimi edhe nje here i butonit e heq receten nga te preferuarat.

**-Si user, dua qe t'i bej share recetave, ne menyre qe te mund te ndaj preferencat e mija edhe me persona te tjere.**

Acceptace Criteria :

1- Butoni share tek cdo recete ben te mundur dergimin e recetes ne platforma te ndryshme.

## Settings user strories

Me klikimin e butonit te settings e cila permban nje nje fjali mireseardhese me "Pershendetje user!" dhe permban butonat: settings, MyFavourites, DailyReminder dhe LOG OUT. Per tu kthyer ne homepage mjafton te klikohet logo-ja e appit.

### Settings

Settings permban logon pertu kthyer ne homepage dhe settings per tu kthyer te menyja kryesore e settings. Poshte tyre gjendet butoni Dark mode per te aktivizuar dark theme.

**-Si user, dua qe te keme edhe nje nderfaqe te erret ne menyre qe te kem mundesi zgjdhje.**

Acceptace Criteria :

1-Dark mode switch i cili gjendet ne settings aktivizon dark mode theme ku ne vend te nje backgroundi te bardhe dhe nje font-i te zi tani do te kem nje background te zi me font te bardhe.
MyFavourites

**-Si user, dua te kem nje hapesire ku te jene te listuara te gjtha recetat qe une dua te ruaj per te patur akses sa me te lehte tek ato.**

Acceptace Criteria :

1-Butoni MyFavourites shfaq te gjitha kartat e recetave te listuara.

2-Per te shtuar receta ne kete liste klikohet butoni ADD TO FAVOURITES

3-Per te fshire recetat nga kjo faqe klikohet buttoni REMOVE FROM Favourites tek detajet e recetes.

### DalyReminders

Permban nje kalendar ku mund te vendosen reminders te ndryshme me notifications.

**-Si user, dua te vendos reminders per data dhe ore te caktuara ,ne menyre qe te rikujtoj vakte te caktuara.**

Acceptace Criteria :

1-Kam nje kalendar per zgjedhjen e dates perkatese, ku useri mund te zgjedhe nje date te caktuar dhe ne kete date te caktoje ne nje fushe oren e reminderit.

2-Pasi fendoset ora useri duhet te plotesoje nje textbox me qellimin e ketij reminderi.

3-Vetem pasi ka percatuar kohen dhe qellimin, useri mund te klikoje butonin ADD REMINDER per te shtuar reminderin.

### Log out

**-Si user, dua te kem nje buton Log out, per te dale ne menyre e sigurt nga app-i.**

Acceptace Criteria :

1-Shfaq nje buton log out ne fund te settings.

2-Ne momentin qe klikohet butoni useri ridrejtohet menjehere ne faqen e log in.

3- Te gjitha te dhenat e sesionit fshihen.
