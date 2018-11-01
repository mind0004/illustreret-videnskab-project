<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="UTF-8">
    <title>Password protect</title>
</head>

<body>
    <h1>Right now there's a password protecting af this folder in the making.</h1>

    <?php
    // find dir
    $dir = dirname(__FILE__);

    // test if .htaccess exists
    if( file_exists( ".htaccess" ) ) {
        // if it does, create a backup.
        $backup_name = "old.htaccess";
        $backup_counter = 0;
        $backup_fullname = $backup_name;
        
        // make sure the backup doesn't overwrite a new backup
        while( file_exists( $backup_fullname ) ) {
            $backup_counter++;
            
            $backup_fullname = $backup_name . "-" . $backup_counter;
        }
        
        rename( ".htaccess", $backup_fullname );
        
        echo "<p>The old .htaccess-fil are hidden under the name <code>".$backup_fullname."</code> - you can delete it, when you have made sure, that the password protection are working.</p>\n<hr>";
        
    
    } 

    // ready to create new .htaccess file
    $htaccess = "AuthType Basic\n". 
                "AuthName \"Password Protected Area\"\n".
                "AuthUserFile ".$dir."/.htpasswd\n".
                "Require valid-user";

    file_put_contents('.htaccess', $htaccess );

    // create .htpasswd
    $htpasswd = 'kea:$apr1$Rl90wP3p$cmm1ivwbPlG56qS9fBaBl/';
    
    file_put_contents(".htpasswd", $htpasswd );
    
    echo "<p>This folder are now password protected</p>";
    
    echo "<p>Username: <code>kea</code><br>Password: <code>kea</code></p>"

/*
AuthType Basic
AuthName "Password Protected Area"
AuthUserFile /var/www/petlatkea.dk/public_html/kea/patterns/.htpasswd
Require valid-user
*/

    // and create .htpasswd (keammd / kode2015
/*
keammd:$apr1$Ab9saxGR$3YCpiocvG..Qj/YmXMlF.0
*/



?>

        <hr>
        <p>You can delete the file <code>passwordprotect.php</code> from this folder - it has finished it's work.</p>

</body>

</html>