<?php
            $email_to = "jeremywdowik@gmail.com";
            $email_subject = "CYBERDAYton Registration Form";
            
            $firstname = $_POST['firstname'];
            $lastname = $_POST['lastname'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];

            
            $email_message = "Hey Justin, \n\n";
            
            function clean_string($string) {
              $bad = array("content-type","bcc:","to:","cc:","href");
              return str_replace($bad,"",$string);
            }
            
            $email_message .= "firstname: ".clean_string($firstname)."\n";
            $email_message .= "lastname: ".clean_string($lastname)."\n";
            $email_message .= "email: ".clean_string($email)."\n";
            $email_message .= "phone: ".clean_string($phone)."\n";

            $headers = 'From: '.$firstname." ".$lastname."\r\n".
            'Reply-To: '.$email."\r\n" .
            'X-Mailer: PHP/'.phpversion();
            @mail($email_to, $email_subject, $email_message, $headers);  
        ?>