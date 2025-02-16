import { CardProps } from "@/src/components/types";
import Articles from "../../Articles";
import { getData } from "@/src/helpers/file-helpers";

const Children = async () => {
    const data: CardProps[] = await getData("children");

    return (
        <Articles data={data} />
    );
};

export default Children;
