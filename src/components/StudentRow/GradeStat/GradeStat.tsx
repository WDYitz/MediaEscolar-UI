import './GradeStat.css'

type Props = {
    gradeStatus: number;
}

export function GradeStat({ gradeStatus }: Props) {
    const gradeSt = gradeStatus >= 7;
    return (
        <span className='gradeStatus'>
            {
                gradeSt  ? <p className="afterSc passed">No</p> : <p className="afterSc reproved">Yes</p>
            }
        </span>
    )
}