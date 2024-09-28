import { useGetEleganteBlocks } from "../elegante";
import { TEleganteTemplateType } from "../type";

export function useFilterAndArrangeBlocks() {
  const getEleganteBlocks = useGetEleganteBlocks();

  return (namesToFilter: string[]) => {
    const blocks = getEleganteBlocks();
    const innerBlock: TEleganteTemplateType[] = [];
    namesToFilter.forEach((name) => {
      blocks.forEach((block) => {
        if (block.name === name) {
          innerBlock.push(block);
        }
      });
    });

    return innerBlock;
  };
}
