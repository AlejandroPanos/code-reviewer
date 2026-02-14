/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Anthropic = require("@anthropic-ai/sdk");
const { systemPrompt, userPrompt } = require("../helpers/script");

/* Configure Anthropic */
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/* Create schema */
const reviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Review title is required"],
    },
    code: {
      type: String,
      required: true,
    },
    summary: {
      totalScore: {
        type: Number,
        min: 0,
        max: 100,
      },
      text: {
        type: String,
        required: true,
      },
    },
    structure: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      feedback: [
        {
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          severity: {
            type: String,
            enum: ["passed", "info", "warning", "critical"],
            default: "info",
          },
        },
      ],
    },
    security: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      feedback: [
        {
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          severity: {
            type: String,
            enum: ["passed", "info", "warning", "critical"],
            default: "info",
          },
        },
      ],
    },
    accessibility: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      feedback: [
        {
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          severity: {
            type: String,
            enum: ["passed", "info", "warning", "critical"],
            default: "info",
          },
        },
      ],
    },
    scalability: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      feedback: [
        {
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          severity: {
            type: String,
            enum: ["passed", "info", "warning", "critical"],
            default: "info",
          },
        },
      ],
    },
  },
  { timestamps: true },
);

/* Create methods */
reviewSchema.statics.createReview = async function (code) {
  if (!code) {
    throw new Error("Code snippet must be provided");
  }

  const message = await client.messages.create({
    model: "claude-sonnet-4-5-20250929",
    max_tokens: 2048,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt(code) }],
    output_config: {
      format: {
        type: "json_schema",
        schema: {
          type: "object",
          properties: {
            summary: {
              type: "object",
              properties: {
                totalScore: { type: "number" },
                text: { type: "string" },
              },
              required: ["totalScore", "text"],
              additionalProperties: false,
            },
            structure: {
              type: "object",
              properties: {
                score: { type: "number" },
                feedback: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" },
                      severity: {
                        type: "string",
                        enum: ["passed", "info", "warning", "critical"],
                      },
                    },
                    required: ["title", "description", "severity"],
                    additionalProperties: false,
                  },
                },
              },
              required: ["score", "feedback"],
              additionalProperties: false,
            },
            security: {
              type: "object",
              properties: {
                score: { type: "number" },
                feedback: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" },
                      severity: {
                        type: "string",
                        enum: ["passed", "info", "warning", "critical"],
                      },
                    },
                    required: ["title", "description", "severity"],
                    additionalProperties: false,
                  },
                },
              },
              required: ["score", "feedback"],
              additionalProperties: false,
            },
            accessibility: {
              type: "object",
              properties: {
                score: { type: "number" },
                feedback: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" },
                      severity: {
                        type: "string",
                        enum: ["passed", "info", "warning", "critical"],
                      },
                    },
                    required: ["title", "description", "severity"],
                    additionalProperties: false,
                  },
                },
              },
              required: ["score", "feedback"],
              additionalProperties: false,
            },
            scalability: {
              type: "object",
              properties: {
                score: { type: "number" },
                feedback: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" },
                      severity: {
                        type: "string",
                        enum: ["passed", "info", "warning", "critical"],
                      },
                    },
                    required: ["title", "description", "severity"],
                    additionalProperties: false,
                  },
                },
              },
              required: ["score", "feedback"],
              additionalProperties: false,
            },
          },
          required: ["summary", "structure", "security", "accessibility", "scalability"],
          additionalProperties: false,
        },
      },
    },
    temperature: 0.6,
  });

  const reviewData = JSON.parse(message.content[0].text);
  return reviewData;
};

/* Create export */
module.exports = mongoose.model("Review", reviewSchema);
