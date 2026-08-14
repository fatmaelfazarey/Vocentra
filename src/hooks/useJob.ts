import { useEffect, useState } from "react";
import JobService from "../services/job-service";

interface IJob {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    department?: string;

    workMode: "REMOTE" | "ON_SITE" | "HYBRID";

    employmentType:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACT"
    | "INTERNSHIP"
    | "FREELANCE"
    | "TEMPORARY";
}

const useJob = () => {
    const [jobs, setJobs] = useState<IJob[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        JobService.getAll<IJob>()
            .then((res) => {
                setJobs(res.data);
                // console.log('res.data', res.data)
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



//     useEffect(() => {
//     console.log("before");

//     JobService.getAll<IJob>()
//         .then((res) => {
//             console.log("success", res);
//         })
//         .catch((err) => {
//             console.error("ERROR", err);
//         });

//     console.log("after");
// }, []);


    return {
        jobs,
        isLoading,
        errorMessage,
        setJobs,
        setLoading,
        setErrorMessage,
    };
};

export default useJob;