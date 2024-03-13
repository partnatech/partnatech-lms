import React from "react";

type ParamsProps = {
  id: string;
};

type Props = {
  params?: ParamsProps;
};

const DynamicAssignmentPage = ({ params }: Props) => {
  const id = params?.id;
  return (
    <div className="max-w-2xl space-y-2">
      <p>
        Assume that you are the first Data Engineer at XYZ Company that runs in
        Banking & Ecommerce. Knowing that transactions will often occur and you
        as Data Engineer there with prior years of experiences realizes that
        cost is really matters when building data pipeline & data warehousing.
        So you want to help your current company with providing the data to be
        analyzed later with minimal cost by applying lessons learned from your
        experience at previous company. Don’t forget to give this system a name.{" "}
      </p>
      <h2 className="font-semibold text-2xl pt-4"> Objectives </h2>
      <p>
        You have two jobs to be done: building ETL/ELT that ingest data from SQL
        table to BigQuery and building pipeline to process Google Analytics data
        from BigQuery to BigQuery. We decide to use Airflow as the Orchestrator
        and Scheduler, but you are freely to use any approach for completing
        this task whether the Airflow is hosted at localhost or Cloud, whether
        it’s using Docker or Native, it’s up to you as well to use any operators
        or using external processing tools i.e Spark (Dataproc), Beam (Dataflow)
        but please state the reason behind it
      </p>
    </div>
  );
};

export default DynamicAssignmentPage;
