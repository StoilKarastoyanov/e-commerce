import { Product } from "@/src/components/types";
import Articles from "../../../components/Articles/Articles";
import { getData } from "@/src/helpers/file-helpers";

const Children = async () => {
    const data: Product[] = await getData("children");

    return (
        <Articles data={data} />
    );
};

export default Children;
