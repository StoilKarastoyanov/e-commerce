import { CardProps } from "@/src/components/types";
import Articles from "../../Articles";
import { getData } from "@/src/helpers/file-helpers";

const Men = async () => {
    const data: CardProps[] = await getData("men");

    return (
        <Articles data={data} />
    );
};

export default Men;
