<?php 
	$people = array(
	array('name'=>'Peter', 'gender'=>'male', 'username'=>'PeterParker'),
	array('name'=>'Jane', 'gender'=>'female', 'username'=>'JaneJohn'),
	);
	
	
	$event = array(
	array('title'=>'Musicians Prayer Fellowship', 'date'=>'2016-07-01', 'photo'=>'01-Musicians-Prayer-Meeting.jpg'),
	array('title'=>'Administrator\'s Fellowship', 'date'=>'2016-07-02', 'photo'=>'02-Church-Administrators-Meeting.jpg'),
	array('title'=>'Muzzle not the ox', 'date'=>'2016-07-03', 'photo'=>'03-Muzzle-not-the-Ox.jpg'),
	array('title'=>'Pastors and Evangelists Prayer Gathering', 'date'=>'2016-07-04', 'photo'=>'04-Pastors-and-Evangelists-Prayer-Gathering.jpg'),
	array('title'=>'Children Teachers Training', 'date'=>'2016-07-05', 'photo'=>'05-Children-Teachers-Training.jpg'),
	array('title'=>'Singles Fellowship', 'date'=>'2016-07-06', 'photo'=>'05-Singles-Fellowship.jpg'),
	array('title'=>'Attitude for Fruitfulness', 'date'=>'2016-07-07', 'photo'=>'07-attitude-for-fruitfulness.jpg'),
	array('title'=>'Faith Confessions', 'date'=>'2016-07-08', 'photo'=>'07-Faith-Confessions.jpg'),
	array('title'=>'Couples Prayers', 'date'=>'2016-07-09', 'photo'=>'08-Couples-Prayers.jpg'),
	array('title'=>'Evangelical Summit', 'date'=>'2016-07-09', 'photo'=>'09-Evangelical-Summit.jpg'),
	array('title'=>'Evangelism: Spiritual Fruitfulness', 'date'=>'2016-07-10', 'photo'=>'10-evangelism---spiritual-fruitfulness.jpg'),
	array('title'=>'Pastoral Synod', 'date'=>'2016-07-11', 'photo'=>'11-Pastoral-Synod.jpg'),
	array('title'=>'Prayer Conquest', 'date'=>'2016-07-12', 'photo'=>'12-Prayer-Conquest.jpg'),
	array('title'=>'Music Classes and Training', 'date'=>'2016-07-13', 'photo'=>'13-Music-Classes-and-Training.jpg'),
	);
	
	
	
	
	
	$data['people'] = $people;
	$data['event'] = $event;
	echo json_encode(array($data)); 