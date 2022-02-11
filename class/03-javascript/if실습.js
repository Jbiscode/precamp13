const profile={
    name:"철수",
    age:8,
    school:"다람쥐초등학교",
}


if(profile.age>=20){
    console.log("성인입니다")
}else if(8<=profile.age){
    console.log("학생입니다")
}else if(profile.age>=1){
    console.log("어린이입니다")
}else{
    console.log("다시 입력하세요")
}