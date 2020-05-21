<?php
$host="localhost";//hosting server address
$username="root";//The username of the hosting server
$password="";//The password of the hosting web server
$dbname="newsletter";//The name of the database to be connected.
//declare the variable to store the connection
$email=filter_input(INPUT_POST,'email');
$conn=mysqli_connect($host,$username,$password,$dbname); //Line to connect to the database
if($conn)//Checking if it is connected to the database
{
//echo "Database connected";//used comment so as not to show database connected to the user
$sql="insert into subscription(Email_Subscriber) values('$email')";//variable containing the sql statement to insert data
$query=mysqli_query($conn,$sql);
if($query)//checking if the data has been inserted
{
  //to display an allert in php
  $appreciation = "Thank you $email for your subscription";
echo "<script type='text/javascript'>alert('$appreciation');</script>";
}
//if the data has not been inserted it will execute the statement below
else{
echo "There was an error in inserting data to the database".Mysqli_error();
}
}
//if the database is not connected execute the code below
else{
die("Could not connect:".mysqli_connect_error());
}
?>
