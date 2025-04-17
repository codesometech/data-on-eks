"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[8727],{1004:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=o(4848),t=o(8453);const r={sidebar_position:1,sidebar_label:"Introduction"},s="Amazon EMR on EKS",i={id:"blueprints/amazon-emr-on-eks/index",title:"Amazon EMR on EKS",description:"Amazon EMR on EKS enables you to submit Apache Spark jobs on-demand on Amazon Elastic Kubernetes Service (EKS) clusters. With EMR on EKS, you can consolidate analytical workloads with your other Kubernetes-based applications on the same Amazon EKS cluster to improve resource utilization and simplify infrastructure management.",source:"@site/docs/blueprints/amazon-emr-on-eks/index.md",sourceDirName:"blueprints/amazon-emr-on-eks",slug:"/blueprints/amazon-emr-on-eks/",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/amazon-emr-on-eks/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"blueprints",previous:{title:"Amazon EMR on EKS",permalink:"/data-on-eks/docs/category/amazon-emr-on-eks"},next:{title:"EMR on EKS with Karpenter",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-karpenter"}},l={},c=[{value:"Benefits of EMR on EKS",id:"benefits-of-emr-on-eks",level:2},{value:"Simplify management",id:"simplify-management",level:3},{value:"Reduce Costs",id:"reduce-costs",level:3},{value:"Optimize Performance",id:"optimize-performance",level:3},{value:"EMR on EKS Deployment patterns with Terraform",id:"emr-on-eks-deployment-patterns-with-terraform",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"amazon-emr-on-eks",children:"Amazon EMR on EKS"})}),"\n",(0,a.jsx)(n.p,{children:"Amazon EMR on EKS enables you to submit Apache Spark jobs on-demand on Amazon Elastic Kubernetes Service (EKS) clusters. With EMR on EKS, you can consolidate analytical workloads with your other Kubernetes-based applications on the same Amazon EKS cluster to improve resource utilization and simplify infrastructure management."}),"\n",(0,a.jsx)(n.h2,{id:"benefits-of-emr-on-eks",children:"Benefits of EMR on EKS"}),"\n",(0,a.jsx)(n.h3,{id:"simplify-management",children:"Simplify management"}),"\n",(0,a.jsx)(n.p,{children:"You get the same EMR benefits for Apache Spark on EKS that you get on EC2 today. This includes fully managed versions of Apache Spark 2.4 and 3.0, automatic provisioning, scaling, performance optimized runtime, and tools like EMR Studio for authoring jobs and an Apache Spark UI for debugging."}),"\n",(0,a.jsx)(n.h3,{id:"reduce-costs",children:"Reduce Costs"}),"\n",(0,a.jsx)(n.p,{children:"With EMR on EKS, your compute resources can be shared between your Apache Spark applications and your other Kubernetes applications. Resources are allocated and removed on-demand to eliminate over-provisioning or under-utilization of these resources, enabling you to lower costs as you only pay for the resources you use."}),"\n",(0,a.jsx)(n.h3,{id:"optimize-performance",children:"Optimize Performance"}),"\n",(0,a.jsxs)(n.p,{children:["By running analytics applications on EKS, you can reuse existing EC2 instances in your shared Kubernetes cluster and avoid the startup time of creating a new cluster of EC2 instances dedicated for analytics. You can also get ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/blogs/big-data/amazon-emr-on-amazon-eks-provides-up-to-61-lower-costs-and-up-to-68-performance-improvement-for-spark-workloads/",children:"3x faster performance"})," running performance optimized Spark with EMR on EKS compared to standard Apache Spark on EKS."]}),"\n",(0,a.jsx)(n.h2,{id:"emr-on-eks-deployment-patterns-with-terraform",children:"EMR on EKS Deployment patterns with Terraform"}),"\n",(0,a.jsx)(n.p,{children:"The following Terraform templates are available to deploy."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../../../data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-karpenter",children:"EMR on EKS with Karpenter"}),": ",(0,a.jsxs)(n.strong,{children:["\ud83d\udc48",":skin-tone-3: Start Here"]})," if you are new to EMR on EKS. This template deploys EMR on EKS cluster and uses ",(0,a.jsx)(n.a,{href:"https://karpenter.sh/",children:"Karpenter"})," to scale Spark jobs."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../../../data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-cdk",children:"ACK controller for EMR on EKS"}),": This template deploys EMR on EKS cluster and uses ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/blogs/big-data/introducing-ack-controller-for-amazon-emr-on-eks/",children:"ACK controller"})," to manage Spark jobs"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var a=o(6540);const t={},r=a.createContext(t);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);