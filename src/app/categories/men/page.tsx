import { Product } from "@/src/components/types";
import Articles from "../../../components/Articles/Articles";
import { getData } from "@/src/helpers/file-helpers";

const Men = async () => {
    const data: Product[] = await getData("men");

    return (
        <Articles data={data} />
    );
};

export default Men;
