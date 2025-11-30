import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";

export default function PricingPage() {
  return (
    <div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="comparison">
        <ComparisonTable />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
    </div>
  )
}