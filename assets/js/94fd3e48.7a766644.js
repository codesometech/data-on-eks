"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[7610],{5141:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(4848),t=a(8453),r=a(2450);const o={title:"Llama-2 with Nemo-Megatron on Trn1",sidebar_position:2,description:"Training a Llama-2 Model using Trainium, Neuronx-Nemo-Megatron and MPI operator"},s="Training a Llama-2 Model using Trainium, Neuronx-Nemo-Megatron and MPI operator",l={id:"gen-ai/training/Neuron/Llama2",title:"Llama-2 with Nemo-Megatron on Trn1",description:"Training a Llama-2 Model using Trainium, Neuronx-Nemo-Megatron and MPI operator",source:"@site/docs/gen-ai/training/Neuron/Llama2.md",sourceDirName:"gen-ai/training/Neuron",slug:"/gen-ai/training/Neuron/Llama2",permalink:"/data-on-eks/docs/gen-ai/training/Neuron/Llama2",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/gen-ai/training/Neuron/Llama2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Llama-2 with Nemo-Megatron on Trn1",sidebar_position:2,description:"Training a Llama-2 Model using Trainium, Neuronx-Nemo-Megatron and MPI operator"},sidebar:"genai",previous:{title:"Llama-2 with RayTrain on Trn1",permalink:"/data-on-eks/docs/gen-ai/training/Neuron/RayTrain-Llama2"},next:{title:"BERT-Large on Trainium",permalink:"/data-on-eks/docs/gen-ai/training/Neuron/BERT-Large"}},d={},c=[{value:"What is Llama-2?",id:"what-is-llama-2",level:3},{value:"Llama-2-chat",id:"llama-2-chat",level:4},{value:"<strong>Which Llama-2 model size should I use?</strong>",id:"which-llama-2-model-size-should-i-use",level:3},{value:"Solution Architecture",id:"solution-architecture",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Verify the resources",id:"verify-the-resources",level:3},{value:"Distributed training",id:"distributed-training",level:2},{value:"Build the neuronx-nemo-megatron container image",id:"build-the-neuronx-nemo-megatron-container-image",level:3},{value:"Launch and connect to a CLI pod",id:"launch-and-connect-to-a-cli-pod",level:3},{value:"Download the Llama tokenizer and Redpajama dataset to FSx",id:"download-the-llama-tokenizer-and-redpajama-dataset-to-fsx",level:3},{value:"Tokenize the dataset",id:"tokenize-the-dataset",level:3},{value:"Modify dataset and tokenizer paths in the training script",id:"modify-dataset-and-tokenizer-paths-in-the-training-script",level:3},{value:"Run pre-compilation job",id:"run-pre-compilation-job",level:3},{value:"Run training job",id:"run-training-job",level:3},{value:"View training job output",id:"view-training-job-output",level:3},{value:"Monitor Trainium accelerator utilization",id:"monitor-trainium-accelerator-utilization",level:3},{value:"View training job metrics in TensorBoard",id:"view-training-job-metrics-in-tensorboard",level:3},{value:"Stopping the training job",id:"stopping-the-training-job",level:3},{value:"Cleaning up",id:"cleaning-up",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"AI on EKS"})," content ",(0,i.jsx)(n.strong,{children:"is being migrated"})," to a new repository.\n\ud83d\udd17 \ud83d\udc49 ",(0,i.jsx)(n.a,{href:"https://awslabs.github.io/data-on-eks/docs/migration/migration-announcement",children:"Read the full migration announcement \xbb"})]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Deployment of ML models on EKS requires access to GPUs or Neuron instances. If your deployment isn't working, it\u2019s often due to missing access to these resources. Also, some deployment patterns rely on Karpenter autoscaling and static node groups; if nodes aren't initializing, check the logs for Karpenter or Node groups to resolve the issue."})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Note: Use of this Llama-2 model is governed by the Meta license.\nIn order to download the model weights and tokenizer, please visit the ",(0,i.jsx)(n.a,{href:"https://ai.meta.com/",children:"website"})," and accept the license before requesting access."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"We are actively enhancing this blueprint to incorporate improvements in observability, logging, and scalability aspects."})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"training-a-llama-2-model-using-trainium-neuronx-nemo-megatron-and-mpi-operator",children:"Training a Llama-2 Model using Trainium, Neuronx-Nemo-Megatron and MPI operator"})}),"\n",(0,i.jsxs)(n.p,{children:["Welcome to the comprehensive guide on training the ",(0,i.jsx)(n.a,{href:"https://ai.meta.com/llama/#inside-the-model",children:"Meta Llama-2-7b "})," model on Amazon Elastic Kubernetes Service (EKS) using AWS Trainium, Neuronx-Nemo-Megatron, and the MPI Operator."]}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial you will learn how to run multi-node training jobs using ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/machine-learning/trainium/",children:"AWS Trainium"})," accelerators in Amazon EKS. Specifically, you will pretrain Llama-2-7b on 4 AWS EC2 trn1.32xlarge instances using a ",(0,i.jsx)(n.a,{href:"https://huggingface.co/datasets/togethercomputer/RedPajama-Data-1T-Sample",children:"subset of the RedPajama dataset"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"what-is-llama-2",children:"What is Llama-2?"}),"\n",(0,i.jsx)(n.p,{children:"Llama-2 is a large language model (LLM) trained on 2 trillion tokens of text and code. It is one of the largest and most powerful LLMs available today. Llama-2 can be used for a variety of tasks, including natural language processing, text generation, and translation."}),"\n",(0,i.jsx)(n.p,{children:"Although Llama-2 is available as a pretrained model, in this tutorial we will show how to pretrain the model from scratch."}),"\n",(0,i.jsx)(n.h4,{id:"llama-2-chat",children:"Llama-2-chat"}),"\n",(0,i.jsx)(n.p,{children:"Llama-2 is a remarkable language model that has undergone a rigorous training process. It starts with pretraining using publicly available online data."}),"\n",(0,i.jsx)(n.p,{children:"Llama-2 is available in three different model sizes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Llama-2-70b:"})," This is the largest Llama-2 model, with 70 billion parameters. It is the most powerful Llama-2 model and can be used for the most demanding tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Llama-2-13b:"})," This is a medium-sized Llama-2 model, with 13 billion parameters. It is a good balance between performance and efficiency, and can be used for a variety of tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Llama-2-7b:"})," This is the smallest Llama-2 model, with 7 billion parameters. It is the most efficient Llama-2 model and can be used for tasks that do not require the highest level of performance."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"which-llama-2-model-size-should-i-use",children:(0,i.jsx)(n.strong,{children:"Which Llama-2 model size should I use?"})}),"\n",(0,i.jsx)(n.p,{children:"The best Llama-2 model size for you will depend on your specific needs. and it may not always be the largest model for achieving the highest performance. It's advisable to evaluate your needs and consider factors such as computational resources, response time, and cost-efficiency when selecting the appropriate Llama-2 model size. The decision should be based on a comprehensive assessment of your application's goals and constraints."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Performance Boost"}),"\nWhile Llama-2 can achieve high-performance inference on GPUs, Neuron accelerators take performance to the next level. Neuron accelerators are purpose-built for machine learning workloads, providing hardware acceleration that significantly enhances Llama-2's inference speeds. This translates to faster response times and improved user experiences when deploying Llama-2 on Trn1/Inf2 instances."]}),"\n",(0,i.jsx)(n.h2,{id:"solution-architecture",children:"Solution Architecture"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we will delve into the architecture of our solution."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Trn1.32xl Instance:"})," This is an EC2 accelerated instance type that is part of the EC2 Trn1 (Trainium) instance family, optimized for machine learning training workloads"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MPI Worker Pods:"})," These are Kubernetes pods configured for running MPI (Message Passing Interface) tasks. MPI is a standard for distributed memory parallel computing. Each worker pod runs on a trn1.32xlarge instance which is equipped with 16 Trainium accelerators and 8 Elastic Fabric Adapters (EFAs). EFAs are network devices that support high-performance computing applications running on Amazon EC2 instances."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MPI Launcher Pod:"})," This pod is responsible for coordinating the MPI job across the worker pods. When a training job is first submitted to the cluster, an MPI launcher pod is created which waits for the workers to come online, connects to each worker, and invokes the training script."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MPI Operator:"})," An operator in Kubernetes is a method of packaging, deploying, and managing a Kubernetes application. The MPI Operator automates the deployment and management of MPI workloads."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FSx for Lustre:"})," A shared, high-performance filesystem which is well suited for workloads such as machine learning, high performance computing (HPC), video processing, and financial modeling. The FSx for Lustre filesystem will be shared across worker pods in the training job, providing a central repository to access the training data and to store model artifacts and logs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Llama-2-trn1",src:a(2622).A+"",width:"885",height:"614"})}),"\n",(0,i.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Steps to train Llama-2 using AWS Trainium on Amazon EKS"})}),"\n",(0,i.jsx)(n.p,{children:"Note: This post makes use of Meta\u2019s Llama tokenizer, which is protected by a user license that must be accepted before the tokenizer files can be downloaded. Please ensure that you have access to the Llama files by requesting access here."}),"\n",(0,i.jsxs)(r.A,{header:(0,i.jsx)(n.h2,{children:(0,i.jsx)(n.span,{children:"Prerequisites"})}),children:[(0,i.jsx)(n.p,{children:"Before we begin, ensure you have all the prerequisites in place to make the deployment process smooth and hassle-free.\nEnsure that you have installed the following tools on your EC2 or Cloud9 instance."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html",children:"EC2 Instance"})," or ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloud9/latest/user-guide/tutorial-create-environment.html",children:"Cloud9 instance"})," \u2192 for both, please ensure you have 100GB+ of storage"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"AWS CLI"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,i.jsx)(n.li,{children:"Git(Only for EC2 instance); Cloud9 comes with git installed by default"}),"\n",(0,i.jsx)(n.li,{children:"Docker"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n",(0,i.jsx)(n.li,{children:"Python, pip, jq, unzip"}),"\n"]}),(0,i.jsxs)(n.p,{children:["To install all the pre-reqs on EC2, you can run this ",(0,i.jsx)(n.a,{href:"https://github.com/sanjeevrg89/data-on-eks/blob/main/ai-ml/trainium-inferentia/examples/llama2/install-pre-requsites-for-ec2.sh",children:"script"})," which is compatible with Amazon Linux 2023."]}),(0,i.jsx)(n.p,{children:"Clone the Data on EKS repository"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,i.jsx)(n.p,{children:"Navigate to the trainium-inferentia directory."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/trainium-inferentia\n"})}),(0,i.jsxs)(n.p,{children:["By default ",(0,i.jsx)(n.strong,{children:"MPI operator"})," is not installed and its set to false. We will run the below export commands to set environment variables."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," As of 2024/01/04 Trainium instances only available in us-west-2, us-east-1, and us-east-2 regions."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export TF_VAR_enable_mpi_operator=true\nexport TF_VAR_enable_fsx_for_lustre=true\nexport TF_VAR_region=us-west-2\nexport TF_VAR_trn1_32xl_min_size=4\nexport TF_VAR_trn1_32xl_desired_size=4\n"})}),(0,i.jsx)(n.p,{children:"Run the install script to provision an EKS cluster with all the add-ons needed for the solution."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./install.sh\n"})}),(0,i.jsx)(n.h3,{id:"verify-the-resources",children:"Verify the resources"}),(0,i.jsx)(n.p,{children:"Verify the Amazon EKS Cluster"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"aws eks --region us-west-2 describe-cluster --name trainium-inferentia\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Creates k8s config file to authenticate with EKS\naws eks --region us-west-2 update-kubeconfig --name trainium-inferentia\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"distributed-training",children:"Distributed training"}),"\n",(0,i.jsx)(n.p,{children:"Once the EKS Cluster is deployed, you can proceed with the next steps of building neuronx-nemo-megatron container image and pushing the image to ECR."}),"\n",(0,i.jsx)(n.h3,{id:"build-the-neuronx-nemo-megatron-container-image",children:"Build the neuronx-nemo-megatron container image"}),"\n",(0,i.jsx)(n.p,{children:"Navigate to examples/llama2 directory"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd examples/llama2/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.code,{children:"1-llama2-neuronx-pretrain-build-image.sh"})," script to build the neuronx-nemo-megatron container image and push the image into ECR."]}),"\n",(0,i.jsx)(n.p,{children:"When prompted for a region, enter the region in which you launched your EKS cluster, above."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./1-llama2-neuronx-pretrain-build-image.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note: The image building and pushing to ECR will take ~10 minutes"}),"\n",(0,i.jsx)(n.h3,{id:"launch-and-connect-to-a-cli-pod",children:"Launch and connect to a CLI pod"}),"\n",(0,i.jsx)(n.p,{children:"In this step we need access to the shared FSx storage. To copy files to this storage, we\u2019ll first launch and connect to a CLI pod running the neuronx-nemo-megatron docker image that you created above."}),"\n",(0,i.jsx)(n.p,{children:"Run the following script to launch the CLI pod:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./2-launch-cmd-shell-pod.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, periodically run the following command until you see the CLI pod go into \u2018Running\u2019 state:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -w\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once the CLI pod is \u2018Running\u2019, connect to it using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl exec -it cli-cmd-shell -- /bin/bash\n"})}),"\n",(0,i.jsx)(n.h3,{id:"download-the-llama-tokenizer-and-redpajama-dataset-to-fsx",children:"Download the Llama tokenizer and Redpajama dataset to FSx"}),"\n",(0,i.jsxs)(n.p,{children:["From within the CLI pod, we\u2019ll download the Llama tokenizer files. These files are protected by Meta's Llama license, so you will need to run the ",(0,i.jsx)(n.code,{children:"huggingface-cli login"})," command to login to Hugging Face using your access token. The access token is found under Settings \u2192 Access Tokens on the Hugging Face website."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"huggingface-cli login\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When prompted for your token, paste-in the access token and hit ",(0,i.jsx)(n.code,{children:"ENTER"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Next, you download the llama7-7b tokenizer files to /shared/llama7b_tokenizer by running the following python code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'python3 <<EOF\nimport transformers\ntok = transformers.AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-hf")\ntok.save_pretrained("/shared/llama7b_tokenizer")\nEOF\n'})}),"\n",(0,i.jsx)(n.p,{children:"Next, download the RedPajama-Data-1T-Sample dataset (a small subset of the full RedPajama dataset that contains 1B tokens)."}),"\n",(0,i.jsx)(n.p,{children:"While still connected to the CLI pod, use git to download the dataset"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /shared\ngit clone https://huggingface.co/datasets/togethercomputer/RedPajama-Data-1T-Sample \\\n    data/RedPajama-Data-1T-Sample\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tokenize-the-dataset",children:"Tokenize the dataset"}),"\n",(0,i.jsx)(n.p,{children:"Tokenize the dataset using the preprocessing script included with neuronx-nemo-megatron. This preprocessing step will take ~60 minutes to run on a trn1.32xl instance."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd /shared\n\n# Clone the neuronx-nemo-megatron repo, which includes the required scripts\ngit clone https://github.com/aws-neuron/neuronx-nemo-megatron.git\n\n# Combine the separate redpajama files to a single jsonl file\ncat /shared/data/RedPajama-Data-1T-Sample/*.jsonl > /shared/redpajama_sample.jsonl\n\n# Run preprocessing script using llama tokenizer\npython3 neuronx-nemo-megatron/nemo/scripts/nlp_language_modeling/preprocess_data_for_megatron.py \\\n    --input=/shared/redpajama_sample.jsonl \\\n    --json-keys=text \\\n    --tokenizer-library=huggingface \\\n    --tokenizer-type=/shared/llama7b_tokenizer \\\n    --dataset-impl=mmap \\\n    --output-prefix=/shared/data/redpajama_sample \\\n    --append-eod \\\n    --need-pad-id \\\n    --workers=32\n"})}),"\n",(0,i.jsx)(n.h3,{id:"modify-dataset-and-tokenizer-paths-in-the-training-script",children:"Modify dataset and tokenizer paths in the training script"}),"\n",(0,i.jsx)(n.p,{children:"Note: When we later launch our training jobs in EKS, the training pods will run the training script from within neuronx-nemo-megatron/nemo/examples directory on FSx. This is convenient, because it will let you modify your training script directly on FSx without requiring that you rebuild the neuronx-nemo-megatron container for every change."}),"\n",(0,i.jsxs)(n.p,{children:["Modify the test_llama.sh script ",(0,i.jsx)(n.code,{children:"/shared/neuronx-nemo-megatron/nemo/examples/nlp/language_modeling/test_llama.sh"})," to update the following two lines. These lines tell the training pod workers where to find the Llama tokenizer and the dataset on the FSx filesystem."]}),"\n",(0,i.jsx)(n.p,{children:"Run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sed -i 's#^\\(: ${TOKENIZER_PATH=\\).*#\\1/shared/llama7b_tokenizer}#' /shared/neuronx-nemo-megatron/nemo/examples/nlp/language_modeling/test_llama.sh\nsed -i 's#^\\(: ${DATASET_PATH=\\).*#\\1/shared/data/redpajama_sample_text_document}#' /shared/neuronx-nemo-megatron/nemo/examples/nlp/language_modeling/test_llama.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Before changes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:": ${TOKENIZER_PATH=$HOME/llamav2_weights/7b-hf}\n: ${DATASET_PATH=$HOME/examples_datasets/llama_7b/book.jsonl-processed_text_document}\n"})}),"\n",(0,i.jsx)(n.p,{children:"After changes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:": ${TOKENIZER_PATH=/shared/llama7b_tokenizer}\n: ${DATASET_PATH=/shared/data/redpajama_sample_text_document}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can save your changes in nano by pressing ",(0,i.jsx)(n.code,{children:"CTRL-X"}),", then ",(0,i.jsx)(n.code,{children:"y"}),", then ",(0,i.jsx)(n.code,{children:"ENTER"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When you are finished, type ",(0,i.jsx)(n.code,{children:"exit"})," or press ",(0,i.jsx)(n.code,{children:"CTRL-d"})," to exit the CLI pod."]}),"\n",(0,i.jsx)(n.p,{children:"If you no longer need the CLI pod you can remove it by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl delete pod cli-cmd-shell\n"})}),"\n",(0,i.jsx)(n.p,{children:"We are finally ready to launch our pre-compilation and training jobs!"}),"\n",(0,i.jsx)(n.p,{children:"First, let's check to make sure the MPI operator is functional by running this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get all -n mpi-operator\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the MPI Operator is not installed, please follow the ",(0,i.jsx)(n.a,{href:"https://github.com/kubeflow/mpi-operator#installation",children:"MPI Operator installation instructions"})," before proceeding."]}),"\n",(0,i.jsx)(n.p,{children:"Before we can run the training job, we first run a pre-compilation job in order to prepare the model artifacts. This step extracts and compiles the underlying compute graphs for the Llama-2-7b model and generates Neuron executable files (NEFFs) that can run on the Trainium accelerators. These NEFFs are stored in a persistent Neuron cache on FSx so that the training job can later access them."}),"\n",(0,i.jsx)(n.h3,{id:"run-pre-compilation-job",children:"Run pre-compilation job"}),"\n",(0,i.jsx)(n.p,{children:"Run the pre-compilation script"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./3-llama2-neuronx-mpi-compile.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Pre-compilation will take ~10 minutes when using 4 trn1.32xlarge nodes."}),"\n",(0,i.jsxs)(n.p,{children:["Periodically run ",(0,i.jsx)(n.code,{children:"kubectl get pods | grep compile"})," and wait until you see that the compile job shows \u2018Completed\u2019."]}),"\n",(0,i.jsx)(n.p,{children:"When pre-compilation is complete, you can then launch the pre-training job on 4 trn1.32xl nodes by running the following script:"}),"\n",(0,i.jsx)(n.h3,{id:"run-training-job",children:"Run training job"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./4-llama2-neuronx-mpi-train.sh\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-training-job-output",children:"View training job output"}),"\n",(0,i.jsx)(n.p,{children:"To monitor the training job output - first, find the name of the launcher pod associated with your training job:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get pods | grep launcher\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once you have identified the name of the launcher pod and see that it is \u2018Running\u2019, the next step is to determine its UID. Replace test-mpi-train-launcher-xxx with your launcher pod name in the following command and it will output the UID:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'kubectl get pod test-mpi-train-launcher-xxx -o json | jq -r ".metadata.uid"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Use the UID to determine the log path so you can tail the training logs. Replace ",(0,i.jsx)(n.code,{children:"UID"})," in the following command with the above value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl exec -it test-mpi-train-worker-0 -- tail -f /shared/nemo_experiments/UID/0/log\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When you are done viewing the logs, you can press ",(0,i.jsx)(n.code,{children:"CTRL-C"})," to quit the tail command."]}),"\n",(0,i.jsx)(n.h3,{id:"monitor-trainium-accelerator-utilization",children:"Monitor Trainium accelerator utilization"}),"\n",(0,i.jsx)(n.p,{children:"To monitor Trainium accelerator utilization you can use the neuron-top command. Neuron-top is a console-based tool for monitoring Neuron and system-related performance metrics on trn1/inf2/inf1 instances. You can launch neuron-top on one of the worker pods as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl exec -it test-mpi-train-worker-0 -- /bin/bash -l neuron-top\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-training-job-metrics-in-tensorboard",children:"View training job metrics in TensorBoard"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.tensorflow.org/tensorboard",children:"TensorBoard"})," is a web-based visualization tool that is commonly used to monitor and explore training jobs. It allows you to quickly monitor training metrics, and you can also easily compare metrics across different training runs."]}),"\n",(0,i.jsx)(n.p,{children:"TensorBoard logs available in the /shared/nemo_experiments/ directory on the FSx for Lustre filesystem."}),"\n",(0,i.jsx)(n.p,{children:"Run the following script to create a TensorBoard deployment so you can visualize your Llama-2 training job progress:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./5-deploy-tensorboard.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once the deployment is ready the script will output a password-protected URL for your new TensorBoard deployment."}),"\n",(0,i.jsx)(n.p,{children:"Launch the URL to view your training progress."}),"\n",(0,i.jsx)(n.p,{children:"When you have opened the TensorBoard interface, choose your training job UID from the left-hand menu, and then explore the various training metrics (ex: reduced-train-loss, throughput, and grad-norm) from the main application window."}),"\n",(0,i.jsx)(n.h3,{id:"stopping-the-training-job",children:"Stopping the training job"}),"\n",(0,i.jsx)(n.p,{children:"To stop your training job and remove the launcher/worker pods, run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl delete mpijob test-mpi-train\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can then run ",(0,i.jsx)(n.code,{children:"kubectl get pods"})," to confirm that the launcher/worker pods have been removed."]}),"\n",(0,i.jsx)(n.h3,{id:"cleaning-up",children:"Cleaning up"}),"\n",(0,i.jsx)(n.p,{children:"To remove the resources created using this solution, run the cleanup script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/trainium-inferentia\n./cleanup.sh\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2450:(e,n,a)=>{a.d(n,{A:()=>p});var i=a(6540),t=a(5556),r=a.n(t),o=a(4164);const s="collapsibleContent_q3kw",l="header_QCEw",d="icon_PckA",c="content_qLC1",h="expanded_iGsi";var u=a(4848);function m(e){let{children:n,header:a}=e;const[t,r]=(0,i.useState)(!1);return(0,u.jsxs)("div",{className:s,children:[(0,u.jsxs)("div",{className:(0,o.A)(l,{[h]:t}),onClick:()=>{r(!t)},children:[a,(0,u.jsx)("span",{className:(0,o.A)(d,{[h]:t}),children:t?"\ud83d\udc47":"\ud83d\udc48"})]}),t&&(0,u.jsx)("div",{className:c,children:n})]})}m.propTypes={children:r().node.isRequired,header:r().node.isRequired};const p=m},2622:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/llama2-trainium-076066f4fecbd832a016e76f75269187.png"},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var i=a(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);