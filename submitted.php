<!DOCTYPE html>
<html lang="en">
<body>
    <section class="PAGE">
        <?php
        if(isset($_POST['email'])){
            $email_to = "justinandersun@gmail.com";
            $email_subject = "CYBERDAYton Registration Form";
            
            function died($error) {
                echo $error;
                echo "<a class=\"returnlink\" href=\"javascript:history.
                back()\">return</a>";
                die();
            }

            if(!isset($_POST['firstname']) || !isset($_POST['lastname']) ||
                !isset($_POST['email']) ||
                !isset($_POST['phone'])) {
                died("An error has occurred.");       
            }

            $firstname = $_POST['firstname'];
            $lastname = $_POST['lastname'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $error_message = "";
            $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
            $string_exp = "/^[A-Za-z .'-]+$/";

            if(strlen($phone) < 9 && strlen($phone) > 9) {
                  $error_message .= "<p class=\"erred\">Please enter a valid phone number.</p>";
            } else {
                if(!preg_match($string_exp,$firstname) || !preg_match($string_exp,$lastname)) {
                  $error_message .= "<p class=\"erred\">Please provide an 
                  actual name.</p>";
                }
                if(!preg_match($email_exp,$email)) {
                  $error_message .= "<p class=\"erred\">Please provide a 
                  valid email.</p>";
                }
            }
            if(strlen($error_message) > 0) {
              died($error_message);
            }
            
            $email_message = "Hey Justin, \n\n";
            
            function clean_string($string) {
              $bad = array("content-type","bcc:","to:","cc:","href");
              return str_replace($bad,"",$string);
            }
            
            $email_message .= clean_string($firstname)."\n";
            $email_message .= clean_string($lastname)."\n";
            $email_message .= clean_string($email)."\n";
            $email_message .= clean_string($phone)."\n";

            $headers = 'From: '.$firstname." ".$lastname."\r\n".
            'Reply-To: '.$email."\r\n" .
            'X-Mailer: PHP/'.phpversion();
            @mail($email_to, $email_subject, $email_message, $headers);  
        ?><p class="erred">Submitted.</p>
        <?php
        } die();
        ?>
    </section>
</body>
</html>