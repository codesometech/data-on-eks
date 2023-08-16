"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:6,sidebar_label:"EMR on EKS Data Platform with AWS CDK"},i="EMR on EKS Data Platform with AWS CDK",l={unversionedId:"blueprints/amazon-emr-on-eks/emr-eks-studio",id:"blueprints/amazon-emr-on-eks/emr-eks-studio",title:"EMR on EKS Data Platform with AWS CDK",description:"In this document we will show you how you can use AWS CDK and the Analytics Reference Architecture (ARA) library to deploy an end to end data analytics platform. This platform will allow you to run Spark interactive Session in Jupyter notebook with EMR Studio supported by EMR on EKS and run Spark jobs with EMR on EKS. The architecture below shows the infrasturcture you will deploy using the CDK and ARA library.",source:"@site/docs/blueprints/amazon-emr-on-eks/emr-eks-studio.md",sourceDirName:"blueprints/amazon-emr-on-eks",slug:"/blueprints/amazon-emr-on-eks/emr-eks-studio",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-studio",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/amazon-emr-on-eks/emr-eks-studio.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"EMR on EKS Data Platform with AWS CDK"},sidebar:"blueprints",previous:{title:"EMR on EKS with Fargate",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-fargate"},next:{title:"Data Analytics on EKS",permalink:"/data-on-eks/docs/category/data-analytics-on-eks"}},s={},p=[{value:"Analytics Reference Architecture",id:"analytics-reference-architecture",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Solution",id:"solution",level:2},{value:"Customize",id:"customize",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Job submission",id:"job-submission",level:3},{value:"Interactive session",id:"interactive-session",level:3},{value:"Cleanup",id:"cleanup",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"emr-on-eks-data-platform-with-aws-cdk"},"EMR on EKS Data Platform with AWS CDK"),(0,o.kt)("p",null,"In this document we will show you how you can use AWS CDK and the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/adding-cdk-constructs-to-the-aws-analytics-reference-architecture/"},"Analytics Reference Architecture")," (ARA) library to deploy an end to end data analytics platform. This platform will allow you to run Spark interactive Session in Jupyter notebook with EMR Studio supported by EMR on EKS and run Spark jobs with EMR on EKS. The architecture below shows the infrasturcture you will deploy using the CDK and ARA library."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"emr-eks-studio-ara-architecture",src:n(3268).Z,width:"1662",height:"980"})),(0,o.kt)("h2",{id:"analytics-reference-architecture"},(0,o.kt)("a",{parentName:"h2",href:"https://aws.amazon.com/blogs/opensource/adding-cdk-constructs-to-the-aws-analytics-reference-architecture/"},"Analytics Reference Architecture")),(0,o.kt)("p",null,"AWS Analytics Reference Architecture (ARA) exposes set fo reusable core components in an AWS CDK library, currently available in Typescript and Python. This library contains AWS CDK constructs (L3) that can be used to quickly provision analytics solutions in demos, prototypes, proofs of concept, and end-to-end reference architectures. The API of ARA Library is defined ",(0,o.kt)("a",{parentName:"p",href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11?lang=typescript"},"here"),"."),(0,o.kt)("p",null,"In our case the library help you deploy an infrastructure optimised for Apache Spark running on EKS leveraging EMR on EKS. The infrastructure will out of the box provide you with pod collocation to reduce network traffic, deploy nodegroup in a single AZ to reduce cross AZ traffic during shuffle, use dedicated instances for EMR on EKS, use optimized instances for memory intensive jobs, use spot and on-demand instances for non-critical job and for critical jobs."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install"},"CDK"))),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"To deploy the data platform we will use an example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Analytics Reference Architecture"),". The example is in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"examples/emr-eks-app")," that you will find in the repository you will clone below."),(0,o.kt)("p",null,"Clone the repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/aws-samples/aws-analytics-reference-architecture.git\n")),(0,o.kt)("p",null,"This solution will deploy the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EKS cluster and a set of Nodegroups:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Managed Nodegroup called tooling for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, EBS CSI Driver..")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Three Managed Nodegroup called critical for critical jobs, each in one AZ, this nodegroup use on-demand instances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Three Managed Nodegroup called non-critical for non-critical jobs, each in one AZ, this nodegroup use spot instances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Three Managed Nodegroup called notebook-driver for non-critical jobs, each in one AZ, this nodegroup use on-demand instances to have a stable driver.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Three Managed Nodegroup called notebook-executor for non-critical jobs, each in one AZ, this nodegroup use spot instances instances for executors.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable EKS Cluster to be with with EMR on EKS service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EMR Virtual Cluster called ",(0,o.kt)("inlineCode",{parentName:"p"},"batchjob"),", used to submitted jobs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EMR Virtual Cluster called ",(0,o.kt)("inlineCode",{parentName:"p"},"emrvcplatform"),", used to submitted jobs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EMR Studio called ",(0,o.kt)("inlineCode",{parentName:"p"},"platform"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"managed endpoint"),", called ",(0,o.kt)("inlineCode",{parentName:"p"},"platform-myendpoint")," , to use with Jupyter notebooks you will create in the EMR Studio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html"},"Execution role")," to use when submiting jobs with EMR on EKS ",(0,o.kt)("inlineCode",{parentName:"p"},"start-job-run"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execution role to use with managed endpoint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'pod templates stored in an S3 bucket called "EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION"'))),(0,o.kt)("h3",{id:"customize"},"Customize"),(0,o.kt)("p",null,"The infrastructure described above is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"emr-eks-app/lib/emr-eks-app-stack.ts"),". If you want to customize it you can change the values in it. For example, you can chose not to create the default nodegroup to use for ",(0,o.kt)("inlineCode",{parentName:"p"},"jobs"),", in this case you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultNodeGroups")," parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"EmrEksCluster"),". You can also call the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEmrEksNodegroup")," method to define your own nodegroups with specific labels, instances or taints. The ",(0,o.kt)("inlineCode",{parentName:"p"},"addEmrEksNodegroup")," method is defined ",(0,o.kt)("a",{parentName:"p",href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11/api/EmrEksCluster?lang=typescript#addEmrEksNodegroup"},"here"),"."),(0,o.kt)("p",null,"You can also create your own execution role through the ",(0,o.kt)("inlineCode",{parentName:"p"},"createExecutionRole")," ",(0,o.kt)("a",{parentName:"p",href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11/api/EmrEksCluster?lang=typescript#createExecutionRole"},"method")," or create a managed endpoint to attach it to an EMR Studio you deployed outside of the ARA library."),(0,o.kt)("p",null,"In order to simplify this example we use IAM authentication with IAM user for ",(0,o.kt)("inlineCode",{parentName:"p"},"EMR Studio"),". If you would like to use a user in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS IAM Identity Center")," you can change ",(0,o.kt)("inlineCode",{parentName:"p"},"studioAuthMode")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotebookPlatform")," construct. Below you will can see the code snipet that you need to change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const notebookPlatform = new ara.NotebookPlatform(this, 'platform-notebook', {\nemrEks: emrEks,\neksNamespace: 'dataanalysis',\nstudioName: 'platform',\nstudioAuthMode: ara.StudioAuthMode.IAM,\n});\n")),(0,o.kt)("h3",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Before you run the solution, you ",(0,o.kt)("strong",{parentName:"p"},"MUST")," change the ",(0,o.kt)("inlineCode",{parentName:"p"},"eksAdminRoleArn")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object of ",(0,o.kt)("inlineCode",{parentName:"p"},"EmrEksCluster")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/emr-eks-app-stack.ts"),". This role allows you to interact manage EKS cluster and should have be allowed at least the IAM action ",(0,o.kt)("inlineCode",{parentName:"p"},"eks:AccessKubernetesApi"),". You need to also change the ",(0,o.kt)("inlineCode",{parentName:"p"},"identityName")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"addUser")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotebookPlatform")," construct. The identityName ",(0,o.kt)("strong",{parentName:"p"},"MUST BE")," a valid IAM username that you use. Below you will can see the code snipet that you need to change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"notebookPlatform.addUser([{\nidentityName:'',\nnotebookManagedEndpoints: [{\nemrOnEksVersion: 'emr-6.8.0-latest',\nexecutionPolicy: emrEksPolicy,\nmanagedEndpointName: 'myendpoint'\n}],\n}]);\n")),(0,o.kt)("p",null,"Last you shold also update the IAM policies passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"createExecutionRole"),", if you want to process data that is in S3 buckets that you own."),(0,o.kt)("p",null,"Navigate into one of the example directories and run ",(0,o.kt)("inlineCode",{parentName:"p"},"cdk synth --profile YOUR-AWS-PROFILE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/emr-eks-app\nnpm install\ncdk synth --profile YOUR-AWS-PROFILE\n")),(0,o.kt)("p",null,"Once the synth is completed you can deploy the infrastructrue with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdk deploy\n")),(0,o.kt)("p",null,"At the end of the deployment you will see output like follow:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ara-cdk-output",src:n(7036).Z,width:"941",height:"156"})),(0,o.kt)("p",null,"In the output you will find job sample configurations with the best practices for Spark on Kubernetes like ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamicAllocation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pod collocation"),"."),(0,o.kt)("h3",{id:"job-submission"},"Job submission"),(0,o.kt)("p",null,"In this example we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"crittical-job")," job configuration to submit a job using that will compute ",(0,o.kt)("inlineCode",{parentName:"p"},"pi")," using that is part of Spark distribution.\nTo submit a job we will use Below you use ",(0,o.kt)("inlineCode",{parentName:"p"},"start-job-run")," command with AWS CLI."),(0,o.kt)("p",null,"Before you run the command below, make sure to change update the following parameters with the on created by your own deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- <CLUSTER-ID> \u2013 The EMR virtual cluster ID, which you get from the AWS CDK output\n- <SPARK-JOB-NAME> \u2013 The name of your Spark job\n- <ROLE-ARN> \u2013 The execution role you created, which you get from the AWS CDK output\n- <S3URI-CRITICAL-DRIVER> \u2013 The Amazon S3 URI of the driver pod template, which you get from the AWS CDK output\n- <S3URI-CRITICAL-EXECUTOR> \u2013 The Amazon S3 URI of the executor pod template, which you get from the AWS CDK output\n- <Log_Group_Name> \u2013 Your CloudWatch log group name\n- <Log_Stream_Prefix> \u2013 Your CloudWatch log stream prefix\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"AWS CLI for start-job-run command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```bash\naws emr-containers start-job-run \\\n    --virtual-cluster-id CLUSTER-ID\\\n    --name=SPARK-JOB-NAME\\\n    --execution-role-arn ROLE-ARN \\\n    --release-label emr-6.8.0-latest \\\n    --job-driver \'{\n    "sparkSubmitJobDriver":{\n        "entryPoint": "local:///usr/lib/spark/examples/src/main/python/pi.py"\n    }\n}\' \\\n--configuration-overrides \'{\n    "applicationConfiguration": [\n    {\n        "classification": "spark-defaults",\n        "properties": {\n            "spark.hadoop.hive.metastore.client.factory.class": "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory",\n            "spark.sql.catalogImplementation": "hive",\n            "spark.dynamicAllocation.enabled":"true",\n            "spark.dynamicAllocation.minExecutors": "8",\n            "spark.dynamicAllocation.maxExecutors": "40",\n            "spark.kubernetes.allocation.batch.size": "8",\n            "spark.executor.cores": "8",\n            "spark.kubernetes.executor.request.cores": "7",\n            "spark.executor.memory": "28G",\n            "spark.driver.cores": "2",\n            "spark.kubernetes.driver.request.cores": "2",\n            "spark.driver.memory": "6G",\n            "spark.dynamicAllocation.executorAllocationRatio": "1",\n            "spark.dynamicAllocation.shuffleTracking.enabled": "true",\n            "spark.dynamicAllocation.shuffleTracking.timeout": "300s",\n            "spark.kubernetes.driver.podTemplateFile": "s3://EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION/EKS-CLUSTER-NAME/pod-template/critical-driver.yaml",\n            "spark.kubernetes.executor.podTemplateFile": "s3://EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION/EKS-CLUSTER-NAME/pod-template/critical-executor.yaml"\n        }\n    }\n    ],\n    "monitoringConfiguration": {\n        "cloudWatchMonitoringConfiguration": {\n            "logGroupName": "Log_Group_Name",\n            "logStreamNamePrefix": "Log_Stream_Prefix"\n        }\n    }\n}\'\n```\n'))),(0,o.kt)("p",null,"Verify the job execution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=batchjob -w\n")),(0,o.kt)("h3",{id:"interactive-session"},"Interactive session"),(0,o.kt)("p",null,"To use an interactive session, you should log in to the EMR Studio instance with the URL provided to you at the end of ",(0,o.kt)("inlineCode",{parentName:"p"},"cdk deploy"),".\nThis link will be in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"https://es-xxxxx/emrstudio-prod-REGION.amazonaws.com"),".\nOnce you click on the link you will be see a log in page where you ",(0,o.kt)("strong",{parentName:"p"},"MUST")," sign-in with the username provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addUser")," method. When you sign in you should follow these steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create workspace, this will start for a Jupyter notebook"),(0,o.kt)("li",{parentName:"ol"},"Connect to the Jupter notebook"),(0,o.kt)("li",{parentName:"ol"},'Attach to a Virtual cluster, this would be have the following name "emrvcplatform" and chose an endpoint called "platform-myendpoint"'),(0,o.kt)("li",{parentName:"ol"},"Open a notebook and select the PySpark kernel"),(0,o.kt)("li",{parentName:"ol"},"You are now ready to perform analyse your data with Spark running on EMR on EKS.")),(0,o.kt)("h2",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"To clean up your environment, you call the command below. This will destroy the EKS cluster with Node groups and VPC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdk destroy\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}d.isMDXComponent=!0},7036:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cdk-deploy-result-7f0116c1481ceb53ea9a11d4fc0c7230.png"},3268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/emr-eks-studio-cdk-ara-48d05caba069c27f9fea7351e13bba60.png"}}]);