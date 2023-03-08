
import {useEffect,useState, Fragment} from 'react'

function College()
{
    
    const [searchStr,setSearchStr] = useState('name=&country=puerto+rico');
    const [collegeJSON,setCollegeJSON] = useState([]);
    useEffect(()=>{ 
        fetch('http://universities.hipolabs.com/search?' + searchStr)
        .then(result => result.json())
        .then(json => setCollegeJSON(json))
    }, [searchStr]);

    function searchCollege(){
        const search_countryInput = document.querySelector('#search_country')
        const search_country = search_countryInput.value
        search_countryInput.placeholder = ''
        const search_name = document.querySelector('#search_name').value
        const queryStr = `name=${search_name}&country=${search_country}`
        console.log(queryStr)
        setSearchStr(queryStr)
    }

    return(

        <main>
             
            <label htmlFor="search_country">Search Country:</label>
            <input type="text" id="search_country" name="search_country" placeholder='Puerto Rico'/>
            <label htmlFor="search_name">University Name:</label>
            <input type="text" id="search_name" name="search_name"/>
            <button onClick={searchCollege}>Search</button> <br/>
                
            
            {/* {collegeJSON.map(x=><a href={x.web_pages[0]}>{x.name}</a>)} */}
            {collegeJSON.map((x, index) => (
                <div key={index}>
                    <a href={x.web_pages[0]}>{x.name}</a>
                    {/* If it is not the last element, add line break */}
                    {index !== collegeJSON.length - 1 && <Fragment><br/></Fragment>}
                </div>
                ))}
        </main>
    )
}


export default College;