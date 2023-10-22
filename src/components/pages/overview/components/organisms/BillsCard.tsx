import Card from "@/components/molecules/Card";
import { BillInfo } from "../molecules/BillInfo";
import billsResume from "@/mocks/billsResume.json";
import { IBill } from "@/types/bills.types";
import { VStack } from "@chakra-ui/react";
import { CardHeader } from "../atoms/CardHeader";

export const BillsCard = () => {
  const bills = billsResume.data as IBill[];

  return (
    <Card>
      <CardHeader />
      <VStack pt={2}>
        {bills.slice(1, 3).map((bill) => (
          <BillInfo key={bill.description} bill={bill} />
        ))}
      </VStack>
    </Card>
  );
};
