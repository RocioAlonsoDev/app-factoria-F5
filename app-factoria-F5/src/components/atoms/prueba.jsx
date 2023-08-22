import APIservice from '../../services/APIservice';

export default function Prueba(){
    //index
    const applicants ='http://localhost/05-app-factoria-F5/back-php/API/applicants.php';
    let data = APIservice(applicants,'READ');

    //get
    const applicant ='http://localhost/05-app-factoria-F5/back-php/API/applicants.php?id=2';
    let applicantdata = APIservice(applicant,'READ');
    
    return(
        <>
            {data && data.map((applicant,index)=>{
                return(
                    <p key={index}>{applicant.ApplicantID}</p>
                )
            })}

            {applicantdata && Object.keys(applicantdata).map(dato=>{
                return(
                    <p key={dato}>{applicantdata[dato]}</p>
                )
            }
            )}
        </>
    )
}