import PageTitle from "@/components/ui/page-title";
import PlanForm from "../_componemts/plan-form";

const AddPlanePage = () => {
  return (
    <div>
      <PageTitle title="Add Plan" />
      <PlanForm formType="add" initialValues={null}/>
    </div>
  );
};

export default AddPlanePage;
