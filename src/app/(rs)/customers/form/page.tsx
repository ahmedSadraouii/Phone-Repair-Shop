import { BackButton } from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomer";

export default async function CustomerFromPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    if (customerId) {
      const customer = await getCustomers(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Back" variant="ghost" />
          </>
        );
      } else {
        console.log("customer", customer);
      }
    } else {
      // new customer form component
    }
  } catch (err) {
    if (err instanceof Error) throw err;
  }
}
