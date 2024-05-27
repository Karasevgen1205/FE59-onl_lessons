function addIntoStart(array, newObject) {
  
    array.unshift(newObject);
  
  
    for (let i = 1; i < array.length; i++) {
      if (!array[i].isFixedPostion) {
        array[i].position++;
      }
    }
  

    return array;
  }
  
 
  const array = [
    { name: 'кукла', position: 1, isFixedPostion: false },
    { name: 'дрель', position: 2, isFixedPostion: true },
    { name: 'сметана', position: 3, isFixedPostion: false },
    { name: 'штаны', position: 4, isFixedPostion: false },
    { name: 'колесо', position: 5, isFixedPostion: false },
  ];
  
  const newArray = addIntoStart(array, { name: 'торт', position: 1, isFixedPostion: false });
  console.log(newArray);