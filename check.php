<?php
session_start();

// Unset all session variables
session_unset();

// Destroy the session
session_destroy();

// Redirect to the desired URL
header('Location: http://127.0.0.1:5000');
exit;
?>
