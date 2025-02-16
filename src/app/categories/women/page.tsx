import { CardProps } from "@/src/components/types";
import Articles from "../../Articles";
import { getData } from "@/src/helpers/file-helpers";

const Women = async () => {
    const data: CardProps[] = await getData("women");

    return (
        <Articles data={data} />
    );
};

export default Women;
