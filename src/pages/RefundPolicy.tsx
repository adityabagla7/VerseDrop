import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Refunds & Returns policy</h1>

        <div className="prose prose-slate max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">RETURNS</h2>
            <p>
              Our policy lasts <strong>14 days</strong>. If 14 days have gone by since your purchase, unfortunately we can't offer you a refund or exchange.
            </p>
            <p>
              We aim to process your refund within <strong>14 working days</strong>.
            </p>
            <p>
              To be eligible for a return, your item must be <strong>unused and in the same condition</strong> that you received it. It must also be in the <strong>original packaging</strong>.
            </p>
            <p>
              Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
            </p>
            <p className="mt-4">Additional non-returnable items:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Downloadable software products</li>
            </ul>
            <p className="mt-4">
              To complete your return, we require a <strong>receipt or proof of purchase</strong>.
            </p>
            <p>
              Please do not send your purchase back to the manufacturer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Partial Refunds</h2>
            <p>
              There are certain situations where only partial refunds are granted: (if applicable)
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Book with obvious signs of use</li>
              <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
              <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
              <li>Any item that is returned more than 30 days after delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Refunds (if applicable)</h2>
            <p>
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
            </p>
            <p>
              If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Late or missing refunds (if applicable)</h2>
            <p>
              If you haven't received a refund yet, first check your bank account again.
            </p>
            <p>
              Then contact your credit card company, it may take some time before your refund is officially posted.
            </p>
            <p>
              Next contact your bank. There is often some processing time before a refund is posted.
            </p>
            <p>
              If you've done all of this and you still have not received your refund yet, please contact us at <strong>contact@versedrop.in</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Sale items (if applicable)</h2>
            <p>
              Only regular priced items may be refunded, unfortunately <strong>sale items cannot be refunded</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Exchanges (if applicable)</h2>
            <p>
              We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <strong>contact@versedrop.in</strong> and send your item to:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">Return Address:</p>
              <p>
                Pragati Yadav<br />
                Indian Institute of Management, Rohtak<br />
                Near Sunaria Jail, Sunaria<br />
                Rohtak, Haryana, 123401
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Gifts</h2>
            <p>
              If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
            </p>
            <p>
              If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Shipping</h2>
            <p>
              To return your product, you should mail your product to:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">Return Address:</p>
              <p>
                Pragati Yadav<br />
                Indian Institute of Management, Rohtak<br />
                Near Sunaria Jail, Sunaria<br />
                Rohtak, Haryana, 123401
              </p>
            </div>
            <p className="mt-4">
              You will be responsible for paying for your own shipping costs for returning your item. <strong>Shipping costs are non-refundable</strong>. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
            <p>
              Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
            </p>
            <p>
              If you are shipping an item over <strong>$75</strong>, you should consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              If you have any questions about our Refund & Returns Policy, please contact us at <strong>contact@versedrop.in</strong>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;

