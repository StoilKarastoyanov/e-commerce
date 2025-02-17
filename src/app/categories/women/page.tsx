import { Product } from "@/src/components/types";
import Articles from "../../../components/Articles/Articles";
import { getData } from "@/src/helpers/file-helpers";

const Women = async () => {
    const data: Product[] = await getData("women");

    return (
        <Articles data={data} />
    );
};

export default Women;
