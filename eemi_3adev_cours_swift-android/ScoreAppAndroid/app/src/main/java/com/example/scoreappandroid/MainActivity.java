package com.example.scoreappandroid;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    int scoreTeamA = 501;
    int scoreTeamB = 501;
    int hitTeamA = 20;
    int hitTeamB = 20;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        displayForTeamA(scoreTeamA);
        displayHitForTeamA(hitTeamA);
        displayForTeamB(scoreTeamB);
        displayHitForTeamB(hitTeamB);
    }

    /**
     * TEAM A
     */

    /**
     * Displays score for Team A.
     */
    public void displayForTeamA(int score) {
        TextView scoreView = (TextView) findViewById(R.id.team_a_score);
        scoreView.setText(String.valueOf(score));
    }

    /**
     * Decreases the score for Team A by 50 points.
     */
    public void bullTeamA(View view) {
        if (scoreTeamA < 50) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamA + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamA = scoreTeamA - 50;
        displayForTeamA(scoreTeamA);
    }

    /**
     * Decreases the score for Team A by 25 points.
     */
    public void outerBullTeamA(View view) {
        if (scoreTeamA < 25) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamA + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamA = scoreTeamA - 25;
        displayForTeamA(scoreTeamA);
    }

    /**
     * Displays hit count for Team A
     */
    private void displayHitForTeamA(int hit) {
        TextView quantityTextView = (TextView) findViewById(R.id.hit_team_A);
        quantityTextView.setText("" + hit);
    }

    /**
     * Increases hit count for Team A
     */
    public void incrementTeamA(View view) {
        if (hitTeamA == 20) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.more_20), Toast.LENGTH_SHORT).show();
            return;
        }
        hitTeamA = hitTeamA + 1;
        displayHitForTeamA(hitTeamA);
    }


    /**
     * Decreases hit count for Team A
     */
    public void decrementTeamA(View view) {
        if (hitTeamA == 1) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.less_1), Toast.LENGTH_SHORT).show();
            return;
        }
        hitTeamA = hitTeamA - 1;
        displayHitForTeamA(hitTeamA);
    }

    /**
     * Counts score for a single hit for Team A
     */
    public void singleTeamA(View view) {
        if (scoreTeamA < hitTeamA) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamA + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamA = scoreTeamA - hitTeamA;
        displayForTeamA(scoreTeamA);
    }

    /**
     * Counts score for a double hit for Team A
     */
    public void doubleTeamA(View view) {
        if (scoreTeamA < hitTeamA * 2) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamA + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamA = scoreTeamA - hitTeamA * 2;
        displayForTeamA(scoreTeamA);
    }

    /**
     * Counts score for a triple hit for Team A
     */
    public void tripleTeamA(View view) {
        if (scoreTeamA < hitTeamA * 3) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamA + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamA = scoreTeamA - hitTeamA * 3;
        displayForTeamA(scoreTeamA);
    }


    /**
     * TEAM B
     */

    /**
     * Displays score for Team B.
     */
    public void displayForTeamB(int score) {
        TextView scoreView = (TextView) findViewById(R.id.team_b_score);
        scoreView.setText(String.valueOf(score));
    }

    /**
     * Decreases the score for Team B by 50 points.
     */
    public void bullTeamB(View view) {
        if (scoreTeamB < 50) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamB + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamB = scoreTeamB - 50;
        displayForTeamB(scoreTeamB);
    }

    /**
     * Decreases the score for Team B by 25 points.
     */
    public void outerBullTeamB(View view) {
        if (scoreTeamB < 25) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamB + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamB = scoreTeamB - 25;
        displayForTeamB(scoreTeamB);
    }

    /**
     * Displays hit count for Team B
     */
    private void displayHitForTeamB(int hit) {
        TextView quantityTextView = (TextView) findViewById(R.id.hit_team_B);
        quantityTextView.setText("" + hit);
    }

    /**
     * Increases hit count for Team B
     */
    public void incrementTeamB(View view) {
        if (hitTeamB == 20) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.more_20), Toast.LENGTH_SHORT).show();
            return;
        }
        hitTeamB = hitTeamB + 1;
        displayHitForTeamB(hitTeamB);
    }


    /**
     * Decreases hit count for Team B
     */
    public void decrementTeamB(View view) {
        if (hitTeamB == 1) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.less_1), Toast.LENGTH_SHORT).show();
            return;
        }
        hitTeamB = hitTeamB - 1;
        displayHitForTeamB(hitTeamB);
    }

    /**
     * Counts score for a single hit for Team B
     */
    public void singleTeamB(View view) {
        if (scoreTeamB < hitTeamB) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamB + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamB = scoreTeamB - hitTeamB;
        displayForTeamB(scoreTeamB);
    }

    /**
     * Counts score for a double hit for Team B
     */
    public void doubleTeamB(View view) {
        if (scoreTeamB < hitTeamB * 2) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamB + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamB = scoreTeamB - hitTeamB * 2;
        displayForTeamB(scoreTeamB);
    }

    /**
     * Counts score for a triple hit for Team B
     */
    public void tripleTeamB(View view) {
        if (scoreTeamB < hitTeamB * 3) {
            // Show an error message as a toast
            Toast.makeText(this, getString(R.string.hit_too_many) + " " + scoreTeamB + " " + getString(R.string.hit_too_many_points) + " " + getString(R.string.good_luck), Toast.LENGTH_SHORT).show();
            return;
        }
        scoreTeamB = scoreTeamB - hitTeamB * 3;
        displayForTeamB(scoreTeamB);
    }


    /**
     * Sends score results via e-mail
     */
    public void send(View view) {


        if (scoreTeamA > 0 && scoreTeamB > 0) {
            Toast.makeText(this, getString(R.string.not_finished), Toast.LENGTH_SHORT).show();
            return;

        } else {
            EditText nameFieldA = (EditText) findViewById(R.id.team_a_name);
            String nameTeamA = nameFieldA.getText().toString();

            EditText nameFieldB = (EditText) findViewById(R.id.team_b_name);
            String nameTeamB = nameFieldB.getText().toString();
            String emailMessage;

            if (scoreTeamA < scoreTeamB) {
                emailMessage = resultMessage(nameTeamA, nameTeamB, scoreTeamB);
            } else {
                emailMessage = resultMessage(nameTeamB, nameTeamA, scoreTeamA);
            }

            Intent intent = new Intent(Intent.ACTION_SENDTO);
            intent.setData(Uri.parse("mailto:"));
            intent.putExtra(Intent.EXTRA_SUBJECT, getString(R.string.result_subject) + ": " + nameTeamA + " vs. " + nameTeamB);
            intent.putExtra(Intent.EXTRA_TEXT, emailMessage);
            if (intent.resolveActivity(getPackageManager()) != null) {
                startActivity(intent);
            }
        }
    }

    /**
     * Generates text of the results e-mail
     */
    private String resultMessage(String winner, String looser, int loosing_score) {
        String message = "Team " + winner + " winns!";
        message += "\n" + "Congratulations!";
        message += "\n" + "Team " + looser + " has " + loosing_score + " more points to go.";
        return message;
    }

    /**
     * Resets name, score and hit counter for both teams
     */
    public void reset(View view) {

        scoreTeamA = 501;
        scoreTeamB = 501;
        hitTeamA = 20;
        hitTeamB = 20;

        getString(R.string.team_a_name);
        getString(R.string.team_b_name);
        displayForTeamA(scoreTeamA);
        displayHitForTeamA(hitTeamA);
        displayForTeamB(scoreTeamB);
        displayHitForTeamB(hitTeamB);

        EditText nameFieldA = (EditText) findViewById(R.id.team_a_name);
        nameFieldA.setText(null);
        EditText nameFieldB = (EditText) findViewById(R.id.team_b_name);
        nameFieldB.setText(null);


    }
}