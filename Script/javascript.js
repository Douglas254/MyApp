
//Form validation
function populate(s1,s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if (s1.value == "doctorofphilosophy") {
    var optionArray = ["|","SBE|School of Business and Economics","SSET|School of Science Engineering and Technology","SOMPA|School of Music and Performing Arts"];
  }
  else if(s1.value == "masters"){
    var optionArray = ["|","MBE|School of Business and Economics ","MSSET|School of Science Engineering and Technology","MSE|School of Education ","MSMHS|School of Medicine and Health Sciences","MSOMPA|School of Music and Performing Arts"];
  }
  else if(s1.value == "degree"){
    var optionArray = ["|","BBE|School of Business and Economics ","BSSET|School of Science Engineering and Technology","BSE|School of Education","BSL|School of Law ","BSMHS|School of Medicine and Health Sciences","BSP|School of Pharmacy","BSMPA|School of Music and Performing Arts"];
  }
  else if(s1.value == "diploma"){
    var optionArray = ["|","DBE|School of Business and Economics ","DSSET|School of Science Engineering and Technology","DSE|School of Education ","DSMHS|School of Medicine and Health Sciences","DSMPA|School of Music and Performing Arts"];
  }
  else if(s1.value == "certificate"){
    var optionArray = ["|","CSSET|School of Science Engineering and Technology","CSE|School of Education ","CSMPA|School of Music and Performing Arts"];
  }
  for(var option in optionArray){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}

function department(s2,s3){
  var s2 = document.getElementById(s2);
  var s3 = document.getElementById(s3);
  s3.innerHTML = "";
  if(s2.value == "SBE"){
    var optionArray = ["|","phDBA|Doctor of Philosophy in Business Administration",];
  }
  else if(s2.value == "SSET"){
    var optionArray = ["|","PhDIT|Doctor of Philosophy in Information Technology","PhDSecurity|Doctor of Philosophy in IT Security and Audit"];
  }
  else if(s2.value == "SOMPA"){
    var optionArray = ["|","PhDMusic|Doctor of Philosophy in Music"];
  }
  else if(s2.value == "MBE"){
    var optionArray = ["|","MBA|Master of Business Administration","MSF|Master of Science in Finance"];
  }
  else if(s2.value == "MSSET"){
    var optionArray = ["|","MIT|Master of Science in Information Technology ","MSPhy|Master of Science in Physics","MSecurity|Master of Science in IT Security and Audit"];
  }
  else if(s2.value == "MSE"){
    var optionArray = ["|","MECS|Master of Education (Curriculum Studies) ","MEGC|Master of Education (Guidance and Counseling)","MEML|Master of Education (Management and Leadership)"];
  }
  else if(s2.value == "MSMHS"){
    var optionArray = ["|","MMFM|Master of Medicine in Family Medicine",",MHND|Master of Science in Human Nutrition and Dietetics"];
  }
  else if(s2.value == "MSMHS"){
    var optionArray = ["|","MMFM|Master of Medicine in Family Medicine",",MHND|Master of Science in Human Nutrition and Dietetics"];
  }
  else if(s2.value == "MSOMPA"){
    var optionArray = ["|","MMC|Master of Music Composition","MME|Master of Music Education ","MM|Master of Musicology"];
  }
  else if(s2.value == "BBE"){
    var optionArray = ["|","BBIT|Bachelor of Business Information Technology ","BBMIT|Bachelor of Business Management and Information Technology","BCOM|Bachelor of Commerce","BSEM|Bachelor of Science in Economics and Mathematics","BSES|Bachelor of Science in Economics and Statistics","BHTM|Bachelor of Science in Hospitality and Tourism Management","BSEF|Bachelor of Science in Economics and Finance","BPLM|Bachelor of Procurement and Logistics Management"];
  }
  else if(s2.value == "BSSET"){
    var optionArray = ["|","BCS|Bachelor of Science in Computer Science","BIT|Bachelor of Science in Information Technology","BST|Bachelor of Science in Telecommunications","BSAS|Bachelor of Science in Actuarial Science","BSCF|Bachelor of Science in Computer Security and Forensics","BSC|Bachelor of Science"];
  }
  else if(s2.value == "BSE"){
    var optionArray = ["|","BEA|Bachelor of Education (Arts)","BES|Bachelor of Education (Science)","BBT|Bachelor of Theology","BMC|Bachelor of Mass Communication"];
  }
  else if(s2.value == "BSL"){
    var optionArray = ["|","BL|Bachelor of Laws "];
  }
  else if(s2.value == "BSMHS"){
    var optionArray = ["|","BHND|Bachelor of Science in Human Nutrition and Dietetics","BSN|Bachelor of Science in Nursing","BSCM|Bachelor of Science in Clinical Medicine","BSEH|Bachelor of Science in Environmental Health","BSES|Bachelor of Science in Environmental Science"];
  }
  else if(s2.value == "BSP"){
    var optionArray = ["|","BP|Bachelor of Pharmacy"];
  }
  else if(s2.value == "BSMPA"){
    var optionArray = ["|","BMPT|Bachelor of Music Production Technology","BMTC|Bachelor of Music Theory and Composition"];
  }
  else if(s2.value == "DBE"){
    var optionArray = ["|","DBM|Diploma in Business Management","DPLM|Diploma in Procurement and Logistics Management","DTM|Diploma in Tourism Management","DSM|Diploma in Sales and Marketing","DHRM|Diploma in Human Resource Management","DBIT|Diploma in Business Information Technology","DHM|Diploma in Hospitality Management"];
  }
  else if(s2.value == "DSSET"){
    var optionArray = ["|","DIT|Diploma in Information Technology","DCS|Diploma in Computer Science"];
  }
  else if(s2.value == "DSE"){
    var optionArray = ["|","DEA|Diploma in Education (Arts)","DEE|Diploma in Education (ECDE)"];
  }
  else if(s2.value == "DSMHS"){
    var optionArray = ["|","DCM|Diploma in Clinical Medicine","DEH|Diploma in Environmental Health","DHND|Diploma in Human Nutrition and Dietetics"];
  }
  else if(s2.value == "DSMPA"){
    var optionArray = ["|","DM|Diploma in Music"];
  }
  else if(s2.value == "CSSET"){
    var optionArray = ["|","|Certificate in Information Technology"];
  }
  else if(s2.value == "CSE"){
    var optionArray = ["|","|Certificate in Early Childhood Education"];
  }
  else if(s2.value == "CSMPA"){
    var optionArray = ["|","|Certificate in Music"];
  }
  for(var option in optionArray){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s3.options.add(newOption);
  }
}
// END OF FORM SELECT VALIDATION
