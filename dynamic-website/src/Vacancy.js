import JobCard from "./JobCard"
import './stylessheets/Vacancy.css'
export default function Vacancy(){
    const CardDetails=[
        {
            'title': 'Senior Full Stack Engineer',
            'points': ['Full time position',
            'Berlin or remote',
            '$65-$85, 0.5-1.50% equity share options'
            ]
        },
        {
            'title': 'Senior Full Stack Engineer',
            'points': ['Full time position',
            'Berlin or remote',
            '$65-$85, 0.5-1.50% equity share options'
            ]
        },
        {
            'title': 'Senior Full Stack Engineer',
            'points': ['Full time position',
            'Berlin or remote',
            '$65-$85, 0.5-1.50% equity share options'
            ]
        }
    ]
    function getCards(){
        return CardDetails.map((val, key)=>{
            return <JobCard title={val['title']} points={val['points']}></JobCard>
        })
    }
    return (
        <div className="Panel Vacancy_Wrapper">
            <div className="Vacancy">
                <div className="semiBigText">Open vacancies</div>
                <div className="Vacancy_JobCard">
                    {getCards()}
                </div>
            </div>
        </div>
    )
}