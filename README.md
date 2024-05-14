---
title: ComicVerse
emoji: 👩‍🎨
colorFrom: red
colorTo: yellow
sdk: docker
pinned: true
app_port: 3000
disable_embedding: true
short_description: Create your own AI comic with a single prompt
hf_oauth: true
hf_oauth_expiration_minutes: 43200
hf_oauth_scopes: [inference-api]
---

#

## Running the project at home

However the project isn't a monolithic Space that can be duplicated and ran immediately:
it requires various components to run for the frontend, backend, LLM, SDXL etc.

If you try to duplicate the project, open the `.env` you will see it requires some variables.

Provider config:
- `LLM_ENGINE`: can be one of `INFERENCE_API`, `INFERENCE_ENDPOINT`, `OPENAI`, `GROQ`, `ANTHROPIC`
- `RENDERING_ENGINE`: can be one of: "INFERENCE_API", "INFERENCE_ENDPOINT", "REPLICATE", "VIDEOCHAIN", "OPENAI" for now, unless you code your custom solution

Auth config:
- `AUTH_HF_API_TOKEN`:  if you decide to use Hugging Face for the LLM engine (inference api model or a custom inference endpoint)
- `AUTH_OPENAI_API_KEY`: to use OpenAI for the LLM engine
- `AUTH_GROQ_API_KEY`: to use Groq for the LLM engine
- `AUTH_ANTHROPIC_API_KEY`: to use Anthropic (Claude) for the LLM engine
- `AUTH_VIDEOCHAIN_API_TOKEN`: secret token to access the VideoChain API server
- `AUTH_REPLICATE_API_TOKEN`: in case you want to use Replicate.com

Rendering config:
- `RENDERING_HF_INFERENCE_ENDPOINT_URL`: necessary if you decide to use a custom inference endpoint
- `RENDERING_REPLICATE_API_MODEL_VERSION`: url to the VideoChain API server
- `RENDERING_HF_INFERENCE_ENDPOINT_URL`: optional, default to nothing
- `RENDERING_HF_INFERENCE_API_BASE_MODEL`: optional, defaults to "stabilityai/stable-diffusion-xl-base-1.0"
- `RENDERING_HF_INFERENCE_API_REFINER_MODEL`: optional, defaults to "stabilityai/stable-diffusion-xl-refiner-1.0"
- `RENDERING_REPLICATE_API_MODEL`: optional, defaults to "stabilityai/sdxl"
- `RENDERING_REPLICATE_API_MODEL_VERSION`: optional, in case you want to change the version

Language model config (depending on the LLM engine you decide to use):
- `LLM_HF_INFERENCE_ENDPOINT_URL`: "<use your own>"
- `LLM_HF_INFERENCE_API_MODEL`: "HuggingFaceH4/zephyr-7b-beta"
- `LLM_OPENAI_API_BASE_URL`: "https://api.openai.com/v1"
- `LLM_OPENAI_API_MODEL`: "gpt-4-turbo"
- `LLM_GROQ_API_MODEL`: "mixtral-8x7b-32768"
- `LLM_ANTHROPIC_API_MODEL`: "claude-3-opus-20240229"

In addition, there are some community sharing variables that you can just ignore.
Those variables are not required to run the AI Comic Factory on your own website or computer
(they are meant to create a connection with the Hugging Face community,
and thus only make sense for official Hugging Face apps):
- `NEXT_PUBLIC_ENABLE_COMMUNITY_SHARING`: you don't need this
- `COMMUNITY_API_URL`: you don't need this
- `COMMUNITY_API_TOKEN`: you don't need this
- `COMMUNITY_API_ID`: you don't need this

Please read the `.env` default config file for more informations.
To customise a variable locally, you should create a `.env.local`
(do not commit this file as it will contain your secrets).

-> If you intend to run it with local, cloud-hosted and/or proprietary models **you are going to need to code 👨‍💻**.
# Comicverse
