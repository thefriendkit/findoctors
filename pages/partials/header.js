import Head from 'next/head'
const Header = () => {
    return ( 
        <>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content="Find easily a doctor and book online an appointment"/>
            <meta name="author" content="Ansonika"/>
            <title>FINDOCTOR - Find easily a doctor and book online an appointment</title>
        
            <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
            <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png"/>
            <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png"/>
            <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png"/>
            <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png"/>
            
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            
            <link href="/assets/bootstrap.min.css" rel="stylesheet"/>
            <link href="/assets/style.css" rel="stylesheet"/>
            <link href="/assets/menu.css" rel="stylesheet"/>
            <link href="/assets/vendors.css" rel="stylesheet"/>
            <link href="/assets/icon_fonts/css/all_icons_min.css" rel="stylesheet"/>
        </>
     );
}
 
export default Header;