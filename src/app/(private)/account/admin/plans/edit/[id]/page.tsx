import PageTitle from "@/components/ui/page-title";
import PlanForm from "../../_componemts/plan-form";

const EditPlanePage = () => {
  return (
    <div>
      <PageTitle title="Edit Plan" />
      <PlanForm formType="edit" initialValues={null} />
    </div>
  );
};

export default EditPlanePage;
