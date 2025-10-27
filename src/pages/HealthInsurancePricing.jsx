import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCalculator, FaChartLine, FaDatabase, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HealthInsurancePricing = () => {
  const [pricingData, setPricingData] = useState(null);
  const [calculatorInputs, setCalculatorInputs] = useState({
    age: 30,
    gender: 'male',
    bmi: 25,
    children: 0,
    smoker: 'no',
    region: 'northeast'
  });
  const [calculatedPremium, setCalculatedPremium] = useState(null);

  // Load pricing model results
  useEffect(() => {
    fetch('/pricing_model_results.json')
      .then(res => res.json())
      .then(data => setPricingData(data))
      .catch(err => console.error('Error loading pricing data:', err));
  }, []);

  // Calculate premium based on inputs
  useEffect(() => {
    if (!pricingData) return;

    const { age, gender, bmi, children, smoker, region } = calculatorInputs;

    // Get rating factors
    const ageFactor = pricingData.age_factors[age.toString()] || 1.0;
    const genderFactor = pricingData.gender_factors[gender] || 1.0;
    const smokerFactor = smoker === 'yes' ? pricingData.smoker_factors.smoker : 1.0;
    const regionFactor = pricingData.region_factors[region] || 1.0;

    // Simplified BMI adjustment (linear approximation)
    const bmiFactor = 0.8 + (bmi - 18.5) * 0.015;

    // Children adjustment (each child adds ~7% based on model)
    const childrenFactor = 1 + (children * 0.07);

    // Calculate annual premium
    const baseCost = pricingData.pure_premium;
    const predictedCost = baseCost * ageFactor * genderFactor * smokerFactor *
                         regionFactor * bmiFactor * childrenFactor;

    // Add loading
    const loading = pricingData.loading_factors.expense + pricingData.loading_factors.risk_margin;
    const annualPremium = predictedCost * (1 + loading);
    const monthlyPremium = annualPremium / 12;

    setCalculatedPremium({
      monthly: monthlyPremium,
      annual: annualPremium,
      predictedCost: predictedCost,
      riskScore: predictedCost / baseCost
    });
  }, [calculatorInputs, pricingData]);

  const handleInputChange = (field, value) => {
    setCalculatorInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!pricingData) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-400">Loading case study...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-accent hover:text-blue-600 mb-8 transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Health Insurance Premium Pricing Model
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            GLM-Based Rate Development with Interactive Pricing Calculator
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
              Actuarial Science
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
              GLM Modeling
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
              Python
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
              React
            </span>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-8 border-l-4 border-accent">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Executive Summary
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Developed a comprehensive health insurance premium pricing model using Generalized Linear Models (GLM)
              on 1,338 real insurance claims. The model incorporates industry-standard actuarial techniques including
              rating factor development, credibility weighting, and risk adjustment to predict medical costs and
              calculate appropriate premiums.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{pricingData.summary_stats.sample_size.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Claims Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{(pricingData.model_performance.test_r2 * 100).toFixed(1)}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Model R²</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{pricingData.smoker_factors.smoker.toFixed(2)}x</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Smoker Cost Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">${pricingData.base_rate_monthly.toFixed(0)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Base Monthly Rate</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Problem Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Problem Statement
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Health insurance pricing requires accurately predicting individual medical costs while ensuring
              premiums cover expected claims, administrative expenses, and maintain adequate margins. The challenge
              is to develop fair, risk-appropriate rates that reflect demographic and behavioral risk factors.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Objectives</h3>
            <ul className="space-y-2">
              {[
                'Build GLM-based predictive model for medical costs',
                'Develop rating factors for age, gender, region, and lifestyle',
                'Implement credibility weighting for regional experience',
                'Calculate risk-adjusted premiums with appropriate loading',
                'Create interactive tool for real-time premium quotes'
              ].map((objective, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Methodology */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Methodology
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FaDatabase className="text-accent" />
                1. Data Source
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Used publicly available health insurance dataset with {pricingData.summary_stats.sample_size.toLocaleString()}
                records containing demographic information (age, gender, BMI, region) and annual medical costs.
                Data split 80/20 for training and validation.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FaChartLine className="text-accent" />
                2. GLM Modeling
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Developed Gamma GLM with log link function including main effects and interaction terms
                (age×smoker, BMI×smoker). Model achieved {(pricingData.model_performance.test_r2 * 100).toFixed(1)}%
                R² on test data with RMSE of ${pricingData.model_performance.test_rmse.toLocaleString('en-US', {maximumFractionDigits: 0})}.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                3. Rating Factors
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Extracted rating relativities from GLM coefficients, creating age curves (18-64),
                gender adjustments, smoker differentials ({pricingData.smoker_factors.smoker.toFixed(2)}x),
                and regional factors. Factors normalized to base profiles.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                4. Credibility & Risk Adjustment
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Applied credibility weighting using square root rule (k=1,082) for regional experience.
                Calculated individual risk scores (predicted cost / average cost) for risk adjustment purposes.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                5. Premium Loading
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Added {(pricingData.loading_factors.expense * 100).toFixed(0)}% expense loading for
                administrative costs and {(pricingData.loading_factors.risk_margin * 100).toFixed(0)}% risk
                margin for adverse deviation and profit to pure premiums.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                6. Model Validation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Validated using actual/expected (A/E) ratios (mean: {pricingData.model_performance.ae_ratio_mean.toFixed(3)}),
                residual analysis, and cross-validation. Tested model stability across demographic segments.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Findings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Key Findings
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Age Impact
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Medical costs increase {(((pricingData.age_factors['64'] / pricingData.age_factors['18']) - 1) * 100).toFixed(0)}%
                from age 18 to 64, with accelerating growth after age 50. Age is a strong predictor with
                consistent effects across models.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Smoking Status
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Smokers have {pricingData.smoker_factors.smoker.toFixed(2)}x higher expected costs than
                non-smokers, representing the largest single risk factor. Interaction with age shows
                compounding effects over time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Regional Variation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Significant regional differences with Southwest at 0.829x and Northeast at 1.000x
                (base). Credibility analysis shows regions need 1,082+ claims for full credibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Model Performance
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                GLM with interactions outperformed simple additive model, improving R² from 65.6% to 80.4%.
                Interaction terms capture important risk synergies.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Interactive Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <FaCalculator className="text-accent" />
            Interactive Premium Calculator
          </h2>
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-8 border-l-4 border-accent">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Adjust the inputs below to see real-time premium calculations based on the fitted GLM model.
              The calculator applies all rating factors and loadings to generate accurate quotes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Controls */}
              <div className="space-y-6">
                {/* Age Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Age: {calculatorInputs.age}
                  </label>
                  <input
                    type="range"
                    min="18"
                    max="64"
                    value={calculatorInputs.age}
                    onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Gender
                  </label>
                  <div className="flex gap-4">
                    {['male', 'female'].map(gender => (
                      <button
                        key={gender}
                        onClick={() => handleInputChange('gender', gender)}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                          calculatorInputs.gender === gender
                            ? 'bg-accent text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                      >
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BMI Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    BMI: {calculatorInputs.bmi}
                  </label>
                  <input
                    type="range"
                    min="16"
                    max="50"
                    value={calculatorInputs.bmi}
                    onChange={(e) => handleInputChange('bmi', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                {/* Children */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of Children: {calculatorInputs.children}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={calculatorInputs.children}
                    onChange={(e) => handleInputChange('children', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                {/* Smoker Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Smoker Status
                  </label>
                  <div className="flex gap-4">
                    {['no', 'yes'].map(status => (
                      <button
                        key={status}
                        onClick={() => handleInputChange('smoker', status)}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                          calculatorInputs.smoker === status
                            ? 'bg-accent text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                      >
                        {status === 'no' ? 'Non-Smoker' : 'Smoker'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Region */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Region
                  </label>
                  <select
                    value={calculatorInputs.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="w-full py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    <option value="northeast">Northeast</option>
                    <option value="northwest">Northwest</option>
                    <option value="southeast">Southeast</option>
                    <option value="southwest">Southwest</option>
                  </select>
                </div>
              </div>

              {/* Results Display */}
              {calculatedPremium && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Estimated Premium
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-accent/10 dark:bg-accent/20 rounded-lg p-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Premium</div>
                        <div className="text-3xl font-bold text-accent">
                          ${calculatedPremium.monthly.toFixed(2)}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Annual Premium</span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            ${calculatedPremium.annual.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Expected Annual Cost</span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            ${calculatedPremium.predictedCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Risk Score</span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {calculatedPremium.riskScore.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-sm text-gray-700 dark:text-gray-300">
                        <p className="font-medium mb-1">Note:</p>
                        <p>Premium includes {(pricingData.loading_factors.expense * 100).toFixed(0)}% expense loading
                        and {(pricingData.loading_factors.risk_margin * 100).toFixed(0)}% risk margin. Risk score
                        indicates relative cost compared to average (1.00).</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Visualizations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Analysis & Visualizations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Age Rating Curve */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Age Rating Factors
              </h3>
              <iframe
                src="/charts/age_rating_curve.html"
                className="w-full h-96 rounded border-0"
                title="Age Rating Curve"
              />
            </div>

            {/* Cost by Smoker */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Cost Distribution by Smoker Status
              </h3>
              <iframe
                src="/charts/cost_by_smoker.html"
                className="w-full h-96 rounded border-0"
                title="Cost by Smoker"
              />
            </div>

            {/* Cost by Age & Smoker */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Costs by Age Band & Smoker Status
              </h3>
              <iframe
                src="/charts/cost_by_age_smoker.html"
                className="w-full h-96 rounded border-0"
                title="Cost by Age and Smoker"
              />
            </div>

            {/* Regional Factors */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Regional Rating Factors
              </h3>
              <iframe
                src="/charts/regional_factors.html"
                className="w-full h-96 rounded border-0"
                title="Regional Factors"
              />
            </div>

            {/* BMI Impact */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Medical Costs vs BMI
              </h3>
              <iframe
                src="/charts/bmi_impact.html"
                className="w-full h-96 rounded border-0"
                title="BMI Impact"
              />
            </div>

            {/* Predicted Costs */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Predicted Annual Costs by Age
              </h3>
              <iframe
                src="/charts/predicted_costs.html"
                className="w-full h-96 rounded border-0"
                title="Predicted Costs"
              />
            </div>
          </div>
        </motion.section>

        {/* Technical Implementation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Technical Implementation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-accent mb-3 text-lg">Actuarial Methods</h3>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>• GLM with Gamma family, log link</li>
                <li>• Rating factor development</li>
                <li>• Credibility theory (square root rule)</li>
                <li>• Risk adjustment & scoring</li>
                <li>• A/E ratio analysis</li>
                <li>• Premium loading structure</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-accent mb-3 text-lg">Statistical Analysis</h3>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Generalized linear models</li>
                <li>• Interaction effect testing</li>
                <li>• Model selection & validation</li>
                <li>• Train-test split methodology</li>
                <li>• Residual diagnostics</li>
                <li>• Cross-validation</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-accent mb-3 text-lg">Technical Tools</h3>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Python (pandas, statsmodels)</li>
                <li>• scikit-learn for validation</li>
                <li>• Plotly for visualizations</li>
                <li>• React.js for web interface</li>
                <li>• JSON data pipeline</li>
                <li>• Responsive web design</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Conclusions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Conclusions & Impact
          </h2>
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-8 border-l-4 border-accent">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Successfully developed a production-ready premium pricing model that balances actuarial accuracy
              with practical usability. The GLM approach captured key risk drivers (age, smoking status, region)
              while maintaining interpretability for rate filing purposes.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {[
                'Achieved 80.4% R² accuracy in predicting medical costs',
                'Developed fair, risk-based rating factors compliant with actuarial standards',
                'Identified smoking as 3x cost multiplier, supporting underwriting decisions',
                'Created transparent pricing tool for customer education',
                'Established framework for ongoing model monitoring and updates'
              ].map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              This project demonstrates end-to-end actuarial pricing capabilities from data analysis through
              model development to customer-facing tools, combining technical rigor with practical business applications.
            </p>
          </div>
        </motion.section>

        {/* Back to Projects */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurancePricing;
