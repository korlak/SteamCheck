Функції steam поки працюють не коректно, не має перевірок декількох перевірок (чи в користувача відкритий профіль і є доступ до ігор), 

1. Add .env file with<br />
steamAPIenv = "";<br />
mongoEnv = "";<br />

mongoEnv - your mongoDB cluster <br />
mongodb+srv://YourName:Password@cluster0.stnwa.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0

steamAPI - you can get here <br />
https://steamcommunity.com/dev/apikey

2. Start Backend<br />
project/<br />
npm run start:dev

3. Start Frontend<br />
project/frontend<br />
npm start

