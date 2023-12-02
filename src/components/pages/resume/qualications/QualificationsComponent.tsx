import { resumeStrings } from "../../../../assets/strings";

export const QualificationsComponent = () => {
    const { title, school, workExp, qualifications } = resumeStrings;
    return (
        <>
        {qualifications.desc}
        </>
    )
}