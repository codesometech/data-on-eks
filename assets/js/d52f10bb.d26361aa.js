"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[2337],{6531:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>s});var a=t(4848),r=t(8453);const s=[];function o(e){const n={code:"code",em:"em",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You will need to replace the ",(0,a.jsx)(n.em,{children:"<S3_BUCKET>"})," placeholders in the benchmark file with the name of the bucket\ncreated earlier. You can get that value by running ",(0,a.jsx)(n.code,{children:"echo $S3_BUCKET"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"To do this automatically you can run the following, which will create a .old\nbackup file and do the replacement for you."})]})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},6336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(4848),r=t(8453),s=(t(1470),t(9365),t(2450)),o=t(6531);const i={sidebar_position:2,sidebar_label:"Data Generation"},l="Data Generation for Running Spark Benchmark Tests on Amazon EKS",c={id:"benchmarks/spark-operator-benchmark/data-generation",title:"Data Generation for Running Spark Benchmark Tests on Amazon EKS",description:"The following guide provides instructions on how to generate the data set for running the TPCDS benchmark tests for Spark.",source:"@site/docs/benchmarks/spark-operator-benchmark/data-generation.md",sourceDirName:"benchmarks/spark-operator-benchmark",slug:"/benchmarks/spark-operator-benchmark/data-generation",permalink:"/data-on-eks/docs/benchmarks/spark-operator-benchmark/data-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/benchmarks/spark-operator-benchmark/data-generation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Data Generation"},sidebar:"benchmarks",previous:{title:"Introduction to Spark Benchmarks",permalink:"/data-on-eks/docs/benchmarks/spark-operator-benchmark/spark-operator-eks-benchmark"},next:{title:"Running the Benchmarks",permalink:"/data-on-eks/docs/benchmarks/spark-operator-benchmark/running-the-benchmark"}},d={},u=[{value:"Deploying the data generation toolkit",id:"deploying-the-data-generation-toolkit",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Generating Test Dataset for Running the TPCDS Benchmark",id:"generating-test-dataset-for-running-the-tpcds-benchmark",level:2},...o.RM,{value:"Cost Considerations",id:"cost-considerations",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"data-generation-for-running-spark-benchmark-tests-on-amazon-eks",children:"Data Generation for Running Spark Benchmark Tests on Amazon EKS"})}),"\n",(0,a.jsx)(n.p,{children:"The following guide provides instructions on how to generate the data set for running the TPCDS benchmark tests for Spark."}),"\n",(0,a.jsx)(n.h2,{id:"deploying-the-data-generation-toolkit",children:"Deploying the data generation toolkit"}),"\n",(0,a.jsxs)(n.p,{children:["In this ",(0,a.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/spark-k8s-operator",children:"example"}),", you will provision the following resources required to run Spark Jobs with open source Spark Operator."]}),"\n",(0,a.jsx)(n.p,{children:"This example deploys an EKS Cluster running the Spark K8s Operator into a new VPC."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Creates a new sample VPC, 2 Private Subnets, 2 Public Subnets, and 2 subnets in the RFC6598 space (100.64.0.0/10) for EKS Pods."}),"\n",(0,a.jsx)(n.li,{children:"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,a.jsx)(n.li,{children:"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with Managed Node Groups for benchmarking and core services, and Karpenter NodePools for Spark workloads."}),"\n",(0,a.jsx)(n.li,{children:"Deploys Metrics server, Spark-operator, Apache Yunikorn, Karpenter, Cluster Autoscaler, Grafana, AMP and Prometheus server."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,a.jsx)(n.p,{children:"Clone the repository."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\ncd data-on-eks\nexport DOEKS_HOME=$(pwd)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If DOEKS_HOME is ever unset, you can always set it manually using ",(0,a.jsx)(n.code,{children:"export DATA_ON_EKS=$(pwd)"})," from your data-on-eks directory."]}),"\n",(0,a.jsxs)(n.p,{children:["Export the following environment variables to set the minimum and desired number of ssd enabled ",(0,a.jsx)(n.code,{children:"c5d12xlarge"})," instances. In our tests, we've set both of these to ",(0,a.jsx)(n.code,{children:"6"})," based on the size of the dataset. Please adjust the number of instances as per your requirement and the size of the dataset you plan to run."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export TF_VAR_spark_benchmark_ssd_min_size=6\nexport TF_VAR_spark_benchmark_ssd_desired_size=6\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," If you don't have access to ",(0,a.jsx)(n.code,{children:"c5d"})," instances, feel free to use other EC2 instances that are equipped with local NVMe-based SSD block level storage. NVMe-based SSD instance storage enabled EC2 instances are a great fit for running the Spark benchmark data generation toolkit."]}),"\n",(0,a.jsxs)(n.p,{children:["Navigate into the following directory and run ",(0,a.jsx)(n.code,{children:"install.sh"})," script."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator\nchmod +x install.sh\n./install.sh\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now create an S3_BUCKET variable that holds the name of the bucket created\nduring the install. This bucket will be used in later examples to store output\ndata. If S3_BUCKET is ever unset, you can run the following commands again."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export S3_BUCKET=$(terraform output -raw s3_bucket_id_spark_history_server)\necho $S3_BUCKET\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generating-test-dataset-for-running-the-tpcds-benchmark",children:"Generating Test Dataset for Running the TPCDS Benchmark"}),"\n",(0,a.jsx)(n.p,{children:"In order to generate the dataset for TPCDS benchmark tests, you will need to configure the S3 bucket name in the data generation manifest."}),"\n",(0,a.jsx)(o.Ay,{filename:"./tpcds-benchmark-data-generation-1t.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator/examples/benchmark\nsed -i.old s/\\<S3_BUCKET\\>/${S3_BUCKET}/g ./tpcds-benchmark-data-generation-1t.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then to begin the data generation execute the command below"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nkubectl apply -f tpcds-benchmark-data-generation-1t.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once you apply the ",(0,a.jsx)(n.code,{children:"tpcds-benchmark-data-generation-1t.yaml"})," manifest, you should see the the driver and executor Pods coming up. It takes about an hour to finish the execution of the test data generation script. Once the execution is completed, you can see go into the AWS S3 console and validate the bucket size."]}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to the S3 bucket that got created as part of running the blueprint. Tick the checkbox besides the folder named ",(0,a.jsx)(n.code,{children:"TPCDS-TEST-1TB"})," and click on ",(0,a.jsx)(n.code,{children:"Actions"})," dropdown and then click on ",(0,a.jsx)(n.code,{children:"Calculate total size"})," option as shown below."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img1.png",src:t(5589).A+"",width:"2688",height:"1310"})}),"\n",(0,a.jsx)(n.p,{children:"For our dataset, the total size is 310 GB."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img2.png",src:t(3486).A+"",width:"2694",height:"1158"})}),"\n",(0,a.jsxs)(n.p,{children:["Once you go inside the ",(0,a.jsx)(n.code,{children:"TPCDS-TEST-1TB"})," folder, you should see lot of subfolders that got generated (as shown below)."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img3.png",src:t(7357).A+"",width:"2694",height:"1002"})}),"\n",(0,a.jsx)(n.p,{children:"Each subfolder should have a .parquet file inside it that contains the generated data."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img4.png",src:t(4850).A+"",width:"2694",height:"1244"})}),"\n",(0,a.jsx)(n.p,{children:"Also, check the Spark driver Pod execution status and logs to see if there are any errors."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n spark-team-a\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"NAME                               READY   STATUS      RESTARTS   AGE\ntpcds-data-generation-1tb-driver   0/1     Completed   0          59m\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The log snippet of the ",(0,a.jsx)(n.code,{children:"tpcds-data-generation-1tb-driver"})," pod should look like below"]}),"\n",(0,a.jsx)(s.A,{header:(0,a.jsx)(n.h2,{children:(0,a.jsx)(n.span,{children:"Driver Pod Log Snippet"})}),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"24/11/01 15:29:42 INFO FileFormatWriter: Start to commit write Job xxxx.\n24/11/01 15:29:42 INFO FileFormatWriter: Write Job xxxx committed. Elapsed time: 158 ms.\n24/11/01 15:29:42 INFO FileFormatWriter: Finished processing stats for write job xxxx.\nData generated at s3a://spark-operator-doeks-spark-logs-xxx/TPCDS-TEST-1TB\n24/11/01 15:29:42 INFO SparkContext: SparkContext is stopping with exitCode 0.\n24/11/01 15:29:42 INFO SparkUI: Stopped Spark web UI at http://tpcds-data-generation-1tb-yyyyy-driver-svc.spark-team-a.svc:4040\n24/11/01 15:29:42 INFO KubernetesClusterSchedulerBackend: Shutting down all executors\n24/11/01 15:29:42 INFO KubernetesClusterSchedulerBackend$KubernetesDriverEndpoint: Asking each executor to shut down\n24/11/01 15:29:42 WARN ExecutorPodsWatchSnapshotSource: Kubernetes client has been closed.\n24/11/01 15:29:42 INFO MapOutputTrackerMasterEndpoint: MapOutputTrackerMasterEndpoint stopped!\n24/11/01 15:29:42 INFO MemoryStore: MemoryStore cleared\n24/11/01 15:29:42 INFO BlockManager: BlockManager stopped\n24/11/01 15:29:42 INFO BlockManagerMaster: BlockManagerMaster stopped\n24/11/01 15:29:42 INFO OutputCommitCoordinator$OutputCommitCoordinatorEndpoint: OutputCommitCoordinator stopped!\n24/11/01 15:29:42 INFO SparkContext: Successfully stopped SparkContext\n"})})}),"\n",(0,a.jsx)(n.h2,{id:"cost-considerations",children:"Cost Considerations"}),"\n",(0,a.jsx)(n.p,{children:"When utilizing c5d instances for data generation, it's important to keep cost implications in mind. These compute-optimized instances with local NVMe storage offer high performance but can be more expensive than standard c5 instances. To optimize costs, it's crucial to carefully monitor usage and scale resources appropriately. The local NVMe storage provides fast I/O, but data persistence is not guaranteed, so you should factor in the cost of data transfer and backup solutions. Spot instances can offer significant savings for interruptible workloads. Additionally, reserving instances for long-term, predictable usage can lead to substantial discounts. Also, it's essential to terminate these instances when they're no longer needed by adjusting the nodegroup's minimum and desired size to 0. This practice helps avoid unnecessary costs from idle resources."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})}),"\n",(0,a.jsxs)(n.p,{children:["This script will cleanup the environment using ",(0,a.jsx)(n.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator && chmod +x cleanup.sh\n./cleanup.sh\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),r=t(4164),s=t(3104),o=t(6347),i=t(205),l=t(7485),c=t(1682),d=t(679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function k(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(k,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},2450:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(6540),r=t(5556),s=t.n(r),o=t(4164);const i="collapsibleContent_q3kw",l="header_QCEw",c="icon_PckA",d="content_qLC1",u="expanded_iGsi";var h=t(4848);function p(e){let{children:n,header:t}=e;const[r,s]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:i,children:[(0,h.jsxs)("div",{className:(0,o.A)(l,{[u]:r}),onClick:()=>{s(!r)},children:[t,(0,h.jsx)("span",{className:(0,o.A)(c,{[u]:r}),children:r?"\ud83d\udc47":"\ud83d\udc48"})]}),r&&(0,h.jsx)("div",{className:d,children:n})]})}p.propTypes={children:s().node.isRequired,header:s().node.isRequired};const m=p},7357:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/datagen-3-8e60f6b610a4ce3bc2f5877e150f1b52.png"},4850:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/datagen-4-a59a02a6bcf2659066d14d9e0cb0f919.png"},5589:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/datagen-bucket1-ddde1c31b663ce9540dbad2461543c20.png"},3486:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/datagen-bucket2-c8168d3114ef6006b2e5740c06a591f4.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);