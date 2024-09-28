import { useGetEleganteBlocks } from "../elegante";
export function useFilterAndArrangeBlocks() {
    var getEleganteBlocks = useGetEleganteBlocks();
    return function (namesToFilter) {
        var blocks = getEleganteBlocks();
        var innerBlock = [];
        namesToFilter.forEach(function (name) {
            blocks.forEach(function (block) {
                if (block.name === name) {
                    innerBlock.push(block);
                }
            });
        });
        return innerBlock;
    };
}
